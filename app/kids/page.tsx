"use client";

import {
  AiOutlineMinus,
  AiOutlinePlus,

} from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi"

import { urlForImage } from "../../sanity/lib/image";

import { Icart } from '../components/type'
import { useStateContext } from "../components/contextapi/useContext"; // context

import getStripe from '../../sanity/lib/strip'
import { Trash2Icon } from "lucide-react";
export default function Cart() {
  const {
    totalPrice,
    totalQuantities,
    cartItems,

    toggleCartItemQuantity,
    removeCartItem,

  } = useStateContext();
  console.log(cartItems)
  console.log(totalQuantities)
  const handleCheckout = async () => {

    const response = await fetch('/api/checkout_sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    })
    const data = await response.json()
    window.location.assign(data)

  }
  return (


    <div className="flex w-full xl:px-0 lg:px-0 px-[8vw] mt-12 ">
      <section className="container justify-center mx-auto  py-4 ">

<div className="flex min-h-[50vh] flex-col items-center justify-center text-center">

          <p className="font-bold  text-4xl">Product Not Found
          </p>
        </div>
</section>
    </div>
  );
}

