"use client"
import React, { FC, useEffect, useState } from "react";
import { IProduct } from "./components/type";
import { client } from "../sanity/lib/client";
import Product from './product/page'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Lazy ,Virtual } from 'swiper';
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "../sanity/lib/image";
import 'swiper/css';
import 'swiper/css/navigation';
import Select from "react-tailwindcss-select";

import Hero from './components/Hero/index'
import PromotionalCards from './components/PromotionalCards'
import { Uniquepro } from "./components/uniqueproduct";
// import Product from './components/Products'

  
const options = [
  { value: "fox", label: "🦊 Fox" },
  { value: "Butterfly", label: "🦋 Butterfly" },
  { value: "Honeybee", label: "🐝 Honeybee" }
];
const tagOptions = [
  { value: 'food', label: 'Food' },
  { value: 'travel', label: 'Travel' },
  { value: 'technology', label: 'Technology' },
];
interface TagSelectorProps {
  selectedTags: { value: string; label: string }[];
  onChange: (selectedOptions: { value: string; label: string }[]) => void;
}
async function Home: React.FC<TagSelectorProps> = ({ selectedTags, onChange }) => {
  const handleChange = (selectedOptions: any) => {
    onChange(selectedOptions);
  };

  const [animal, setAnimal] = useState(null);
  const handleChange =( value : any )=> {
    console.log("value:", value);
    setAnimal(value);
};
  const { productlist} = await showproductlist()
console.log(productlist)
const slides = Array.from({ length: 1000 }).map(
  (el, index) => `Slide ${index + 1}`
);
  return (
    <div>
      <h1>Hello</h1>
    
 {/* <Hero/>
 <PromotionalCards/>
 <Uniquepro/> */}
   <Select
            value={animal}
            onChange={handleChange}
            options={options}
            formatOptionLabel={data => (
                <li
                    className={`block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded ${
                        !data.isSelected
                            ? `text-white bg-blue-500`
                            : `bg-blue-100 text-blue-500`
                    }`}
                >
                    
                    {data.label}
                </li>
                 )}
        />
    </div>
  )
}


export default Home


 const showproductlist = async() => {
  const query = `*[_type == "product"]{
    _id,
    title ,
    slug ,
    price ,
    category,
    images,  
  }`;
  const productlist    = await client.fetch(query);
  return {
    productlist,
  }
}