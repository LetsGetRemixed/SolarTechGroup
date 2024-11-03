const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/create-checkout-session', async (req, res) => {
    const { cartItems } = req.body;
    if (!cartItems || !cartItems.length) {
        return res.status(400).json({ error: 'Cart is empty' });
      }
    try {
        // Parse the body and convert to an array of items
        const lineItems = cartItems.map(item => ({
            price_data: {
              currency: 'usd',
              product_data: {
                name: item.name,
                description: item.description || '', 
              },
              unit_amount: item.amount, // Amount in cents
            },
            quantity: item.quantity,
          }));
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
              mode: 'payment',
              success_url: `http://localhost:2424/success`,  // Temp
              cancel_url: `http://localhost:2424/cancel`,    // Temp
        });
        res.json({ url: session.url });
    } catch (error) {
        res.status(500).send({ error: error.message });
      }
});

module.exports = router;