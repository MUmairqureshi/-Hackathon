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
        <h2 className="text-2xl font-bold">Shopping Cart</h2>
        {!totalQuantities ? (<div className="flex min-h-[50vh] flex-col items-center justify-center text-center">

          <BiShoppingBag className=" font-bold text-9xl	" />
          <p className="font-bold  text-4xl">Your shopping bag is empty
          </p>
        </div>
        ) :
          (<div className=" xl:gap-x-14 lg:gap-x-14  mt-6 justify-center  grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-2">
            {cartItems.map((item: Icart) => (
              <div className="md:col-span-3 col-span-2 lg:col-span-2 xl:col-span-2  w-full justify-start mb-12">
                <div className="md:flex c   sm:flex gap-y-12  gap-x-8">
                  <div className="md:flex sm:flex lg:mb-0 md:mb-0 xl:mb-0 mb-10 gap-x-8">
                    <img
                      src={urlForImage(item?.images[0].asset).url()!}

                      className="xl:w-40 w- lg:w-40 md:w-40 w-52 h-full gap-y-4  object-contain rounded-xl"
                      alt="coer"
                    />
                  </div>
                  <div className="flex  flex-row lg:w-[48vw] xl:w-[48vw] col-span-2	justify-between ">
                    <div className="flex flex-col   ">
                      <p className="md:text-xl flex md:mb-2">{item.title}</p>
                      <p className="text-lg md:mb-2 font-semibold opacity-50 ">{item.category}</p>
                      <p className="font-semibold  md:mb-2 text-lg">Delivery Estimation</p>
                      <p className="font-lg md:mb-2 text-yellow-500 font-bold">5 Working Days</p>

                      <p className="font-bold text-lg">${item.price}</p>
                    </div>

                    <div className="flex flex-col  justify-between items-end">
                      <div className="cursor-pointer">
                        <Trash2Icon onClick={() => removeCartItem(item._id)} />
                      </div>
                      <div className="flex gap-x-5 items-center">
                        <button
                          className="md:w-12 md:h-12  sm:w-12 sm:h-12 w-8 h-8 flex items-center justify-center  bg-gray-200 shadow-2xl rounded-full cursor-pointer text-gray-800
            text-xl
            " onClick={() => toggleCartItemQuantity(item._id, 'dec')}
                        >
                          <AiOutlineMinus />
                        </button>
                        {item.quantity}
                        <button
                          className="md:w-12 md:h-12  sm:w-12 sm:h-12  w-8 h-8 flex items-center justify-center  bg-gray-200 shadow-2xl rounded-full cursor-pointer text-gray-800
            text-xl border-black
            " onClick={() => toggleCartItemQuantity(item._id, 'inc')}
                        >
                          <AiOutlinePlus />

                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className=" order order-first md:order-none sticky h-fit top-20 md:col-span-2 col-span-2 lg:col-span-1 xl:col-span-1 justify-center mx-auto w-full mx-auto  flex flex-col px-6 py-6  bg-gray-50  ">
              <h3 className="text-start font-bold mb-6 text-lg">Order Summary</h3>
              <div className="flex   mb-7 justify-between">
                <div className="  gap-x-2 justify-between">
                  <p className="mb-6">
                    Quantity
                  </p>

                  <p>Sub Total</p>
                </div>

                <div className="gap-x-2 justify-between">
                  <p className="mb-6"> {totalQuantities}</p>
                  <p> $  {totalPrice}</p>
                </div>
              </div>

              <button onClick={handleCheckout} className="p-2 bg-black text-lg text-white">
                Process to Checkout
              </button>
            </div>
          </div>)}
      </section>
    </div>
  );
}

