import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { NFT_PRICE_EURO, description_nft, NAME_APP } from './ethers';

export const createCheckOutSession = async (amount, whichChoice) => {
  const item = {
    name: NAME_APP,
    description: description_nft,
    image: 'https://img.myloview.fr/images/mystery-box-icon-vector-illustration-700-231597627.jpg',
    quantity: amount,
    price: NFT_PRICE_EURO,
  };
  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  const stripePromise = loadStripe(publishableKey);
  if (amount && amount > 0 && whichChoice == "stripe") {
    const stripe = await stripePromise;

    // Que envoyer ?
    const checkoutSession = await axios.post('/api/create-stripe-session', {
      item: item,
    });
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  }
}; 