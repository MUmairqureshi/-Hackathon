"use client";
import React from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
export default function PaymentSuccessfullpage() {
  return (
    <div className="success bg-[#f1f1f1] flex flex-col items-center text-center rounded-2xl py-24 md:m-16 my-10"> 
  
      <p className="icon text-green-800">
        <BsBagCheckFill size={80} />
      </p>
      <h1 className="my-2 text-[2.75rem]">Thank you for your order!</h1>

      <p className="text-center text-bold text-base">Check your email inbox for the receipt</p>
      <p className="description">
        If you have any questions, please email
        <Link href="mailto:dinemarket@example.com" className="ml-[5px] text-red-800 ">dinemarket@example.com</Link>
      </p>
      <Link href="/" className="mt-8">
        <button className="sm:w-[300px] md:w-[400px] bg-[#212121] text-white font-semibold leading-[18px] p-4 text-[1.125rem] rounded-lg" type="button"> 
          Continue Shopping
        </button>
      </Link>
    </div>
  );
}