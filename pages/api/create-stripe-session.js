const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
/*
payment_method_types: 
card
acss_debit
afterpay_clearpay
alipay
bacs_debit
bancontact
boleto
eps
fpx
giropay
grabpay
ideal
klarna
oxxo
p24
sepa_debit
sofort
wechat_pay
*/

async function CreateStripeSession(req, res) {
  const { item } = req.body;

  const redirectURL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://stripe-checkout-next-js-demo.vercel.app';

  const transformedItem = {
    price_data: {
      currency: 'eur',
      product_data: {
        images: [item.image],
        name: item.name,
      },
      unit_amount: item.price * 100,
    },
    description: item.description,
    quantity: item.quantity,
    account: item.account
  };

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [transformedItem],
    mode: 'payment',
    success_url: redirectURL + '/mint?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: redirectURL + '/cancel',
    metadata: {
      images: item.image,
    },
  });
  res.json({ id: session.id });
}

export default CreateStripeSession;
