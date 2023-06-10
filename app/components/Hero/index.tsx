
"use client";
import React, { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import hero from "../../../public/hero.png";
import Image from "next/image";
import bustle from "../../../public/bustle.png";
import versace from '../../../public/versace.png'
import bazaar from '../../../public/Bazaar.png'
import instyle from '../../../public/inStyle.png'
import {
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";

export default  function Hero() {
  const [eqty, setEqty] = useState(1)
  const iincQty = () => {

    setEqty(eqty + 1)
    }
  console.log(eqty)

  return (
    <div className="flex flex-row justify-between mt-20">
      <div className="flex flex-col mx-20 mt-5">
        <div className="flex bg-[#e1edff] text-blue-700 h-[40px] w-[120px] rounded-lg justify-center items-center">
          <h1>Sale 70%</h1>
        </div>
        <div className="flex mt-10">
          <h1 className="text-5xl text-[#212121] w-96 leading-[50px] font-bold">
            An Industrial Take on Streetwear
          </h1>
        </div>
        <div className="mt-10 w-64">
          <p>
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
        </div>
        <div className="flex flex-row mt-10 bg-black text-white w-40 px-5 text-center py-3">
          <FiShoppingCart size={30} className="mt-2" />
          <h1 className="font-semibold">Start Shopping</h1>
        </div>
        <div className="flex flex-row mt-5">
          <div className="mx-2">
            <Image src={bazaar} alt="logo" />
          </div>
          <div className="mx-2">
            <Image src={bustle} alt="logo" />
          </div>
          <div className="mx-2">
            <Image src={versace} alt="logo" />
          </div>
          <div className="mx-2">
            <Image src={instyle} alt="logo" />
          </div> 
        </div>
      </div>
      <div className="flex flex-row mx-20">
        <div className="z-10 absolute">
          <Image src={hero} alt="hero" className="z-20" />
        </div>
        <div className="bg-[#FFECE3] w-[40rem] h-[34rem] rounded-full relative mt-10"></div>
      </div>
      <br/>
              <div className="flex mb-24">
              <span className="minus"
               >
                <AiOutlineMinus />
              </span>
              <span className="num">{eqty}</span>
              <span className="plus"   onClick={() => iincQty()}>
                <AiOutlinePlus />
              </span>
            </div>

    </div>
  );
}





