const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function RetrieveStripeSession(req, res) {
  const session_id = req.query.id;
  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);
    if (session.status == 'complete' && session.payment_status == 'paid') {
      res.send(session);
    }
  } catch (error) {
    res.status(422).send(error)
  }
}

export default RetrieveStripeSession;