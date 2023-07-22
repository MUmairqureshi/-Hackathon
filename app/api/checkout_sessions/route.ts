import getStripe from "@/sanity/lib/strip";
// import { NextRequest, NextResponse } from "next/server";
import Stripe from 'stripe'
// const stripe =  new Stripe(process.env.STRIPE_SECRET_KEY);
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2022-11-15"
});
 
import type { NextApiRequest, NextApiResponse } from "next";

import { NextRequest, NextResponse } from 'next/server';
import { IProduct } from "@/app/components/type";
import { urlForImage } from "@/sanity/lib/image";
 

export  async function  POST(req : NextRequest, res :NextApiResponse) {
  const cartItems  = await  req.json()
  console.log(cartItems)
 
const redirectURL =
process.env.NODE_ENV === 'development'
? 'http://localhost:3000'
: 'your deployed url';

const session = await stripe.checkout.sessions.create({
 payment_method_types: ['card'],
 line_items: cartItems.map((item: IProduct) => {
            const imgUrl = urlForImage(item.images[0]).url();
  
            return {
              price_data: {
                currency: "USD",
                product_data: {
                  name: item.title,
                  images: [imgUrl]
                },
                unit_amount: (item.on_sale ? item.sale_price : item.price) * 100
              },
              adjustable_quantity: {
                enabled: true,
                minimum: 1
              },
              quantity: item.quantity ? item.quantity : 1
            };
          }),
  
 mode: 'payment',
 success_url: redirectURL + '/payment/success',
 cancel_url: redirectURL + '/payment/fail',
 metadata: {
   images: cartItems.images,
   name:"some additional info",
   task:"Umair created a task"
 },
});

  //  console.log("response-------------------",await session);
return NextResponse.json(session?.url) ;
};


























// import type { NextApiRequest, NextApiResponse } from "next";
// import { IProduct } from "../../components/type";
// import {urlForImage} from "../../../sanity/lib/image";
// import { NextRequest } from "next/server";
// // import Stripe from "stripe";



// export  async function POST(  req: NextRequest,  res: NextApiResponse) {
//   const {item}= await req.json();
// console.log(item)
//   // if (req.method === "POST") {
//     try {
//       console.log(item)


//       const session = await stripe.checkout.sessions.create({
//         submit_type: "pay",
//         payment_method_types: ["card"],
//         billing_address_collection: "auto",
//         shipping_options: [
//           {
//             shipping_rate: "shr_1LwIjtHs6qS0xDzPhMIPdvAd"
//           },
//           {
//             shipping_rate: "shr_1LwIkrHs6qS0xDzP3qphYXpq"
//           }
//         ],
//         line_items: req.body.items.map((item: IProduct) => {
//           const imgUrl = urlForImage(item.images).url();

//           return {
//             price_data: {
//               currency: "USD",
//               product_data: {
//                 name: item.title,
//                 images: [imgUrl]
//               },
//               unit_amount: (item.on_sale ? item.sale_price : item.price) * 100
//             },
//             adjustable_quantity: {
//               enabled: true,
//               minimum: 1
//             },
//             quantity: item.quantity ? item.quantity : 1
//           };
//         }),
//         mode: "payment",
//         success_url: `${req.headers.origin}/success`,
//         cancel_url: `${req.headers.origin}`
//       });

//       res.status(200).json(session);
//     } catch (error) {
//       res.status(500).json({
//         message: error instanceof Error ? error.message : null
//       });
//     }
//   // } else {
//     // res.setHeader("Allow", "POST");
//     // res.status(405).end("Method Not Allowed");
//   // }
// }