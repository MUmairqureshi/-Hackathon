"use client";
import {
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import Link from "next/link";
import { client } from "../../../sanity/lib/client";
import { IProduct } from "../../components/type";
import { urlForImage } from "../../../sanity/lib/image";
import Image from "next/image";
import { useStateContext } from "../contextapi/useContext";
import { useEffect, useState } from "react";
 type Iprop = {
    product :IProduct
 }

export default  function ProductDtl({product} : Iprop ) {
  const { qty, decQty, incQty, onAdd } = useStateContext();


  console.log(product);



   
  return (
    <div className="justify-center mx-auto">
      <br />

      <div className="flex g-0">
        <div className="col-md-6">
          <Image
            alt="img"
            width={60}
            height={150}
            src={urlForImage(product.images[0]).url()}
            className="w-full h-full object-cover brightness-75 group-hover:brightness-100 duration-300 group-hover:scale-110"
          />
        </div>
        <div className="des col-md-6 ">
          <div className=" card-body">
            <p className="h5 text-uppercase   text-black-50">
              {product.title}
            </p>
            <h5 className="card-title display-5">{product.category}</h5>

            <h3 className="card-text display-6  my-4">
              Rs:{product.price}.00
            </h3>
            <div className="flex mb-18">
              <span className="minus" onClick={decQty} >
                <AiOutlineMinus />
              </span>
              <span className="num">{qty}</span>
              <span className="plus"   onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </div>
            <span
              // onClick={() => {
              //   onAdd(product[0]);
              // }}
              className="btn btn-outline-cmdark px-4 py-2 "
            >
              ADD TO CART
            </span>
            <Link href={""} className="btn btn-dark ms-2 px-3 py-2 ">
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
      <h1> </h1>
    </div>
  );
}

