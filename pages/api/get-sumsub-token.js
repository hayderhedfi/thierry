import axios from "axios";
const FormData = require('form-data');
const crypto = require('crypto');
require('dotenv').config()


const SUMSUB_APP_TOKEN = process.env.SUMSUB_APP_TOKEN;
const SUMSUB_SECRET_KEY = process.env.SUMSUB_SECRET_KEY;
const LEVEL_NAME = "nefty_test";

const handler = async (req, res) => {
    
  const external_id = "preview-random-st5dtazgkv"

  const SUMSUB_BASE_URL = 'https://api.sumsub.com'; 

  var config = {};
  config.baseURL= SUMSUB_BASE_URL;


  axios.interceptors.request.use(createSignature, function (error) {
    return Promise.reject(error);
  })

  function createSignature(config) {
    console.log('Creating a signature for the request...', config);
  
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

  function createAccessToken (externalUserId, levelName = LEVEL_NAME, ttlInSecs = 600) {
    console.log("Creating an access token for initializng SDK...");
  
    var method = 'post';
    var url = `/resources/accessTokens?userId=${externalUserId}&ttlInSecs=${ttlInSecs}&levelName=${levelName}`;
  
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

      
  const response = await axios(createAccessToken(external_id, LEVEL_NAME, 1200))
  .then(function (response) {
    console.log("Response:\n", response.data);
    return response;
  })
  .catch(function (error) {
    console.log("Error:\n", error);
  });

  console.log(response);
  return res.send(response.data.token)
};
export default handler;