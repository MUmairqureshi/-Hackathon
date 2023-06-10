"use client"
import Image from "next/image";
import React from "react";
import Logo from '../../../public/Logo.png'
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { useStateContext } from '../contextapi/useContext'
function Header() {
  const {  totalQuantities } = useStateContext()
  return (
    <div className="flex flex-row justify-between mx-32 my-10">
      <div>
        <Image src={Logo} alt="Logo" />
      </div>
      <div>
        <Link href={""} className="mx-5 text-lg font-medium">
          Female
        </Link>
        <Link href={""} className="mx-5 text-lg font-medium">
          Male
        </Link>
        <Link href={""} className="mx-5 text-lg font-medium">
          Kids
        </Link>
        <Link href={""} className="mx-5 text-lg font-medium">
          All Products
        </Link>
      </div>
      <div className="flex flex-row border-2 rounded-md h-7">
        <AiOutlineSearch size={20} className="mt-[2px] mx-2" />
        <input placeholder="What are you loooking for" />
      </div>
      <Link href="/cart/">
      <div className="flex flex-row rounded-full bg-[#f1f1f1] w-12 h-12">
        <div className="flex justify-center items-center mx-3">
            <FiShoppingCart size={25}/>
        </div>
        <div className="bg-red-500 rounded-full absolute w-6 right-[7rem] text-center top-9 h-6 px-2"><h1 className="text-white">
         {totalQuantities}
          </h1></div>
      </div>
      </Link>
    </div>
  );
}

export default Header;