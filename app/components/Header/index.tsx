"use client"
import Image from "next/image";
import React, { useState } from "react";
import Logo from '../../../public/Logo.png'
import Link from "next/link";
 import { RxCross2 } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import { RiMenu3Fill } from "react-icons/ri";

import { FiShoppingCart } from "react-icons/fi";
import { useStateContext } from '../contextapi/useContext'
function Header() {

  const [nav, setNave] = useState(false)
  const handlenav = () => {
    setNave(!nav)
  }
  const { totalQuantities } = useStateContext()
  return (

    <div className=" container   bg-white">
      <div className="  flex flex-wrap justify-between  mx-auto my-10 ">
        <div>
          <Link href="/">
          <Image src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="lg:flex  hidden">
          <Link href="/female" className="mx-5 text-lg font-medium">
            Female
          </Link>
          <Link href="/male" className="mx-5 text-lg font-medium">
            Male
          </Link>
          <Link href={""} className="mx-5 text-lg font-medium">
            Kids
          </Link>
          <Link href="/product" className="mx-5 text-lg font-medium">
            All Products
          </Link>
        </div>








        <div className=" lg:flex hidden flex-row border-2    rounded-md h-7">
          <AiOutlineSearch size={20} className="mt-[2px] mx-2 " />
          <input placeholder="What are you loooking for " className=" w-[18vw] px-2 text-xs hover:border-black mr-4" />
        </div>
        <Link href="/cart/">
          <div className=" lg:flex hidden flex-row rounded-full bg-[#f1f1f1] w-12 h-12">
            <div className="flex justify-center items-center mx-3">
              <FiShoppingCart size={25} />
            </div>
            <div className="bg-red-500 rounded-full absolute w-6 right-[7rem] text-center top-9 h-6 ">
              <h1 className="text-white">
              {totalQuantities}
            </h1></div>
          </div>
        </Link>
        {!nav ? <div className="  lg:hidden inline-flex text-2xl font-bold"> 
       <RiMenu3Fill className="text-2xl h1 w-10 font-bold " onClick={handlenav} />
        </div> : <div className="lg:hidden inline-flex text-2xl font-bold"> 
       <RxCross2 className="text-2xl h1 w-10 font-bold " onClick={handlenav} />
        </div>}
        
        
      </div>
      










      <div className={nav ? " mt-5  md:hidden left-0  w-full h-full border-r border-r-gray-200 bg-white flex   flex-col  " : "hidden"} >
      
      <Link href="/cart/" onClick={handlenav}>
        <div className="   flex-row rounded-full bg-[#f1f1f1]   mx-auto w-12 h-12   items-center">
          <div className="flex justify-center items-center mx-   mx-auto">
            <FiShoppingCart className="my-3 mx-auto" size={25} />
          </div>
          <div className="bg-red-500 rounded-full mx-auto text-center absolute   ml-[2rem] text-center mt-[-3rem] h-6 px-2">
            <h1 className="text-center text-white">
            {totalQuantities}
          </h1></div>
        </div>
      </Link>
      
        <Link href="/female"  onClick={handlenav}  className="mx-5 text-lg font-medium mt-3 text-center">
          Female
        </Link>
        <Link href="/male" onClick={handlenav}  className="mx-5 text-lg font-medium mt-3 text-center">
          Male
        </Link>
        <Link href="/kids" onClick={handlenav}  className="mx-5 text-lg font-medium mt-3 text-center">
          Kids
        </Link>
        <Link href="/product" onClick={handlenav}  className="mx-5 text-lg font-medium mt-3 mb-12 text-center">
          All Products
        </Link>
      </div>
      </div>
      
  );
}

export default Header