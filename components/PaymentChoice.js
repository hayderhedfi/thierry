import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';

import metamask from '../public/metamask.png'
import stripe from '../public/stripe.png'
import { Btn } from './Button';
import { Context } from '../utils/context';
import { createCheckOutSession } from '../utils/stripe';
import { getChainNetwork, SwitchNetwork, getAccount, MUMBAI_ID, WALLET_RECIPIENT } from '../utils/ethers';

var Web3 = require('web3');
var web3 = new Web3(Web3.givenProvider);

const cryptosChoice = [
  {
    name: "MATIC",
    quantity: 10
  }
];

export const PaymentChoice = () => {

  const { state, dispatch } = useContext(Context);

  // Fake data
  const PRIX_UNITAIRE_MATIC = 1;
  const PRIX_UNITAIRE_US = 10;

  const [whichChoice, setChoice] = useState('payment-choice');
  const [amount, setAmount] = useState(0)
  const [cryptoChoice, setCryptoChoice] = useState(null);
  const [network, setNetwork] = useState();
  // empty - display - confirmed
  const [recapCf, setRecap] = useState('empty');

  useEffect(async () => {
    const network = await getChainNetwork(state.account);
    setNetwork(network);
  }, [])
  
  const _mintNFT = async () => {
    if (whichChoice == "crypto-choice" &&  cryptoChoice == "MATIC" && amount && amount > 0) {
      console.log("Mint with crypto...", cryptoChoice);

      const tx = {
        from: state.account,
        to: WALLET_RECIPIENT,
        value: web3.utils.toWei(String(PRIX_UNITAIRE_MATIC), 'ether'),
      }

      if (network == MUMBAI_ID) {
        try {
          await web3.eth.sendTransaction(tx);
        } catch (error) {
          console.log(error);          
        }
      } else {
        console.log("Wrong Network");
        setNetwork("Wrong network");
      }
    }

    // STRIPE
    if (whichChoice == "stripe" && amount && amount > 0) {
      createCheckOutSession(amount, whichChoice);
    }
  }

  const _setAmount = (amount) => {
    setAmount(amount)
  }

  console.log("network,", network);
  // Recap crypto
  if (recapCf == "display" && whichChoice == "crypto-choice") {
    return <div className='lg:m-auto flex flex-wrap justify-center bloc-payment-choice'>
      <div className='w-full py-3 bold'>Choisir une crypto-monnaie</div>
      {cryptosChoice.map((c, i) => {
        return <div key={i} className={`w-1/4 btn py-2 px-10 ${cryptoChoice == c.name ? "payment-choice-item-selected" : "payment-choice-item"}`} onClick={() => setCryptoChoice(c.name)}>
          <p>{c.name}</p>
          <p>{c.quantity}</p>
        </div>
      })}
      <div className='w-full mt-10'>
        <Btn cn="whitebg grey py-3 px-5" cb={() => setRecap('confirmed')} text="Suivant"/>
      </div>
    </div>
  }

  // Recap confirmed crypto
  if (recapCf == "confirmed" && whichChoice == "crypto-choice") {
    return <div className='flex flex-wrap justify-center bloc-payment-choice'>
      <RecapText amount={amount} price={PRIX_UNITAIRE_US} token={cryptoChoice} />
      <div className='w-full mt-10'>
        { !state.account 
        ?  <Btn text="Connect Metamask" cb={() => getAccount(null, dispatch)} cn="whitebg grey py-3 px-5"/>
        : network == state.polygon 
        ? <Btn cn="whitebg grey py-3 px-5" cb={() => _mintNFT(cryptoChoice)} text="Mint my NFT"/>
        : <Btn cn="whitebg grey py-3 px-5" cb={() => SwitchNetwork(state.account)} text="Change to Polygon"/>
        }
      </div>
    </div>
  }

  // Recap stripe
  if (recapCf == "display") {
    return  <div className='flex flex-wrap justify-center bloc-payment-choice'>
      <div>
        <h6 className='bold'>Recapitulatif</h6>
        <RecapText amount={amount} price={PRIX_UNITAIRE_US} token="Euro" />
      </div>
      <Btn cn="whitebg grey py-3 px-5" cb={() => _mintNFT()} text="Mint my NFT"/>
    </div>
  }

	return(
    <div>
      <div className='flex justify-center bloc-payment-choice'>
        <div onClick={() => setChoice("crypto-choice")} className={`w-1/2 ${whichChoice == "crypto-choice" ? "payment-choice-item-selected " : "payment-choice-item "} cursor-pointer`}>
          <button >
            <Image src={metamask} alt="metamask logo" width="80px" height="80px" />
            <p>Payer en crypto</p>
          </button>
        </div>
        <div onClick={() => setChoice('stripe')} className={`w-1/2 ${whichChoice == "stripe" ? "payment-choice-item-selected " : "payment-choice-item "} cursor-pointer`}>
          <MyStripe 
            amount={amount} 
            whichChoice={whichChoice} 
            setChoice={setChoice}
          />
        </div>
      </div>
      <div className='mt-10'> 
        <input onChange={e => _setAmount(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Quantité"/>
        <Btn cn="whitebg grey py-3 px-5 mt-5" cb={() => setRecap('display')} text="Mint my NFT"/>
      </div>
    </div>
	);
}


export const MyStripe = () => {
	return (
    <button>
      <Image src={stripe} alt="stripe logo" width="140px" height="80px"/>
      <p>Stripe</p>
    </button>
  );
}

const RecapText = ({amount, price, token}) => {
  return <p className='py-3'> 
    Prix unitaire d'un NFT : <span className='bold'>{price}</span> {token}.
    Je suis sur le point d'acheter <span className='bold'>{amount}</span> NFT de Nefty7 à <span className='bold'>{amount * price}</span> {token}.
  </p>
}