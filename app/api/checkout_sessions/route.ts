const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(request: Request, response : Response) {
  if (request.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: '{{PRICE_ID}}',
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${request.headers.origin}/?success=true`,
        cancel_url: `${request.headers.origin}/?canceled=true`,
      });
      response.redirect(303, session.url);
    } catch (err : any) {
      response.status(err.statusCode || 500).json(err.message);
    }
  } else {
    response.setHeader('Allow', 'POST');
    response.status(405).end('Method Not Allowed');
  }
}