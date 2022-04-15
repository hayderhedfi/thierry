import { useContext, useEffect, useState } from "react";
import { useRouter } from 'next/router';
import axios from "axios";

import { MAX_AMOUNT_PER_MINT, ratio_for_stripe } from "../utils/ethers";
import { Context } from "../utils/context";
import { Btn } from "../components/Button";

export default function Mint () {
  
  const router = useRouter();
  const { session_id } = router.query;

  // https://github.com/vercel/next.js/discussions/11484
  if (!session_id) {
    return null;
  }

  const [amountToMint, setAmountToMint] = useState(0);

  // Welcome messages and error diplay messages
  const [welcome, setWelcome] = useState(null)
  const [errorAmount, setErrorAmount] = useState(null);

  const { state, dispatch } = useContext(Context);

  // We check the payment twice with session_id: 
  // on component mount and on mint trigger
  useEffect(async() => {
    await axios.post('/api/retrieve-session/'+session_id).then(res => {
      const verif = res.data;
      if (verif.status == "complete" && verif.payment_status == "paid" && verif.amount_total > 0) {
        setWelcome("Paiement réussi!");
        setAmountToMint((verif.amount_total/ratio_for_stripe));
      } else {
        setWelcome("Error Stripe");
        setAmountToMint(null)
      }
    }).catch(err => {
      setWelcome("Error Stripe");
      setAmountToMint(null)
      console.log("Error retrieve session", err);
    });
  }, []);

  const _mintNFT = async () => {
    try {
      const retrieveSession = await axios.post('/api/retrieve-session/'+session_id);
      const verif = retrieveSession.data;
      if (
        verif.status == 'complete' && 
        verif.payment_status == 'paid' && 
        verif.payment_intent &&
        amountToMint == (verif.amount_total/ratio_for_stripe) &&
        amountToMint > 0 && 
        amountToMint <= MAX_AMOUNT_PER_MINT
      ) {
        console.log("Mint starting...");
        setErrorAmount(null);
        // Contract call
        // MintNFT(amountToMint);
      } else {
        setErrorAmount(`Cannot mint more than ${MAX_AMOUNT_PER_MINT} NFTS`);
      }
    } catch (error) {
      console.log("Error payment not successful", error);
      setWelcome("Error Stripe");
    }
  }

  if (session_id) {
    return(
      <div className="container px-5 fail-page flex-col">
        {
          welcome !== "Error Stripe" 
        ?
        <>
          <h1 className="py-5">{welcome}</h1>
          <p className="font-bold">{amountToMint} NFT </p>
          <p className="pt-2">{errorAmount && errorAmount}</p>
         <div> <Btn cb={() => _mintNFT()} cn="pink-linear py-4 px-10 mt-10" text="Minter mon NFT"/> </div>
        </>
        : null
        }
      </div>  
    );
  }

  return (
		<div className="container px-5 fail-page flex-col">
			<h1>Error page not found</h1>
		</div>
	);
}

/*
id: 'cs_test_a1UsEfpPUx1UNrPqPLgMkvTSiGTbcVNPSzRdOqZkYc32i4PEExWdb2gae9',
object: 'checkout.session',
after_expiration: null,
allow_promotion_codes: null,
amount_subtotal: 3000,
amount_total: 3000,
automatic_tax: { enabled: false, status: null },
billing_address_collection: null,
cancel_url: 'http://localhost:3000/cancel',
client_reference_id: null,
consent: null,
consent_collection: null,
currency: 'eur',
customer: null,
customer_creation: 'always',
customer_details: null,
customer_email: null,
expires_at: 1643108092,
livemode: false,
locale: null,
metadata: {
  images: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80'
},
mode: 'payment',
payment_intent: 'pi_3KLQCGCcfbJY6tyn0QcJsXSJ',
payment_method_options: {},
payment_method_types: [ 'card' ],
payment_status: 'unpaid',
phone_number_collection: { enabled: false },
recovered_from: null,
setup_intent: null,
shipping: null,
shipping_address_collection: null,
shipping_options: [],
shipping_rate: null,
status: 'open',
submit_type: null,
subscription: null,
success_url: 'http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}',
total_details: { amount_discount: 0, amount_shipping: 0, amount_tax: 0 },*/
// const elements = Stripe.elements({
//   clientSecret: 'CLIENT_SECRET',
// });