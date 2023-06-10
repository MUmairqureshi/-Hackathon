
import React, { FC, useEffect, useState } from "react";
import { IProduct } from "../components/type";
import { client } from "../../sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";

import {
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import Products from "../components/Products/index";
interface IProps {
  productlist: IProduct;
}
export default async function  Product( ) {



  const { productlist} = await showproductlist()

   

  return (
    <div className="mt-10">


 
      <div className="justify-center">
        <div className="grid md:grid-cols-4 mx-40">

          {productlist.map((product :IProduct) => (
            <div key={product._id} className="mb-8 gap-12">
              <Link
                key={product._id}
                href={`/productdetail/${product.slug.current}`}
              >
                {" "}
                <Image
                  alt="img"
                  width={300}
                  height={350}
                  src={urlForImage(product.images[0]).url()}
                  className="w-full h-full object-cover brightness-75 group-hover:brightness-100 duration-300 group-hover:scale-110"
                />
              </Link>
              <h2>{product.title}</h2>
              <h4>{product.category}</h4>
              <h4>${product.price}.00</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export const showproductlist = async() => {
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
  };
};
