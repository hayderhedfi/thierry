const axios = require('axios');
const crypto = require('crypto');
const FormData = require('form-data');
const csv = require('csv-parser');
const fs = require('fs');
require('dotenv').config();

// These parameters should be used for all requests
const SUMSUB_APP_TOKEN = process.env.SUMSUB_APP_TOKEN; // Example: sbx:uY0CgwELmgUAEyl4hNWxLngb.0WSeQeiYny4WEqmAALEAiK2qTC96fBad - Please don't forget to change when switching to production
const SUMSUB_SECRET_KEY = process.env.SUMSUB_SECRET_KEY; // Example: Hej2ch71kG2kTd1iIUDZFNsO5C1lh5Gq - Please don't forget to change when switching to production
const SUMSUB_BASE_URL = 'https://api.sumsub.com'; 
const LEVELNAME = 'kyc-nefty-seven';

var config = {};
config.baseURL= SUMSUB_BASE_URL;

axios.interceptors.request.use(createSignature, function (error) {
  return Promise.reject(error);
})

// This function creates signature for the request as described here: https://developers.sumsub.com/api-reference/#app-tokens
function createSignature(config) {
  console.log('Creating a signature for the request...');

  var ts = Math.floor(Date.now() / 1000);
  const signature = crypto.createHmac('sha256',  SUMSUB_SECRET_KEY);
  signature.update(ts + config.method.toUpperCase() + config.url);

  if (config.data instanceof FormData) {
    signature.update (config.data.getBuffer());
  } else if (config.data) {
    signature.update (config.data);
  }

  config.headers['X-App-Access-Ts'] = ts;
  config.headers['X-App-Access-Sig'] = signature.digest('hex');

  return config;
}

// These functions configure requests for specified method
// https://developers.sumsub.com/api-reference/#getting-applicant-status-sdk
function getApplicantWallet(applicantId) {
  console.log("Getting the applicant status...");

  var method = 'get';
  var url = `/resources/applicants/${applicantId}/one`;

  var headers = {
    'Accept': 'application/json',
    'X-App-Token': SUMSUB_APP_TOKEN
  };

  config.method = method;
  config.url = url;
  config.headers = headers;
  config.data = null;

  return config;
}

// This section contains requests to server using configuration functions
// The description of the flow can be found here: https://developers.sumsub.com/api-flow/#api-integration-phases

        // Such actions are presented below:
        // 1) Creating an applicant
        // 2) Adding a document to the applicant
        // 3) Getting applicant status
        // 4) Getting access tokens for SDKs

async function getWallets() {
  externalUserId = "random-JSToken-" + Math.random().toString(36).substr(2, 9);
  levelName = LEVELNAME;
  console.log("External UserID: ", externalUserId); 
  let wallets = [];
  
  console.log("Reading file ...");
  fs.createReadStream('/home/helalyosra/projects/nefty7-app/scripts/applicants-id.csv')
  .pipe(csv())
      .on('data', async (row) => {
          const response = await axios(getApplicantWallet(row.applicantId))
          .then(function (response) {
            wallets.push(response.data.questionnaires[0].sections.polygonAddress.items.address.value);
            // Write data in 'output.json' .
            fs.writeFile('/home/helalyosra/projects/nefty7-app/scripts/output.json', JSON.stringify(wallets), (err) => {
              // In case of a error throw err.
              if (err) throw err;
            });
          })
          .catch(function (error) {
            console.log("Error:\n", error.response.data);
          });
      })
      .on('end', () => {
          console.log('CSV file successfully processed');
      });
}

getWallets();