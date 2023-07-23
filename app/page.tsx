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

import Hero from './components/Hero/index'
import PromotionalCards from './components/PromotionalCards'
import { Uniquepro } from "./components/uniqueproduct";
// import Product from './components/Products'

async function Home() {
  const { productlist} = await showproductlist()
console.log(productlist)
const slides = Array.from({ length: 1000 }).map(
  (el, index) => `Slide ${index + 1}`
);
  return (
    <div>
 <Hero/>
 <PromotionalCards/>
 <Uniquepro/>

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