
import { client } from './db'

import { buffer } from "micro";
import { drizzle } from 'drizzle-orm/node-postgres';


import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2022-11-15",
});
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

const fukfillorder = async () => {
    return
}
export async function POST(req: any, res: any) {

    //     try {
    //     const rawBody = await req.text();
    //     const sig = req.headers.get("stripe-signature") as string
    //     console.log("sig-----------=============-------====-=-=-", sig);

    //     const event = stripe.webhooks.constructEvent(rawBody,sig,webhookSecret);

    //    console.log(event);

    //     if ( 'checkout.session.completed' === event.type ) {
    //         const session = event.data.object;

    //         console.log( 'payment success-----------------------', session );

    //         const line_Items  = await stripe.checkout.sessions.listLineItems(event.data.object!.id);
    //     console.log("Line Items==========================",line_Items);


    //     //Once you'll get data you can use it according to your 
    //     //reqirement for making update in DB


    //     } else {
    //         res.setHeader("Allow", "POST");
    //         // res.status(405).end("Method Not Allowed");
    //     }
    //     } catch (err: any) {
    //         console.log("Error in webhook----------", err);
    //         // res.status(400).send(`Webhook Error: ${err.message}`);
    //         return;
    //     }
    const requestBuffer = await buffer(req)
    const payload = requestBuffer.toString()
    const sig = req.headers["stripe-signature"]
    let event
    try {
        event = stripe.webhooks.constructEvent(payload, sig, webhookSecret)
    }
    catch (err: any) {
        console.log("Error", err.message)
        return res.status(400).send(`Wenhook error  ${err.message}`)
    }
    if (event.type === "checkout.session.completed") {
        const session :any = event.data.object
        
const db = drizzle(client);

const allUsers = await db.select().from(session);
        return allUsers
            .then(() => res.status(200))
            .catch((err: { message: any; }) => res.status(400).send(`Webhook Error :${err.message} `))
    }

}
export const config = {
    api: {
        bodyParser: false,
        externalResolver: true
    }
}
// acct_1NHji8C1YrxY0PFd







