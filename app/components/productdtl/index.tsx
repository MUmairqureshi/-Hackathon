"use client";
import {
  AiOutlineMinus,

  AiOutlinePlus,
} from "react-icons/ai";

import { IProduct } from "../../components/type";
import { urlForImage } from "../../../sanity/lib/image";
 
import { FiShoppingCart } from "react-icons/fi";
import { useStateContext } from "../contextapi/useContext";
 
type Iprop = {
  product: IProduct
}
export default function ProductDtl({ product }: Iprop) {
  const { qty, decQty, incQty, onAdd } = useStateContext();
 
  return (
    <div className=" ">

      <div className="xl:flex lg:flex xl:flex-row gap-x-4 mt-10">
        <div className="flex  flex-row gap-x-2 ">
          <img
            src={urlForImage(product.images[0].asset).url()!}
            alt={product.alt}
             className="xl:w-24 lg:w-24 w-12  xl:h-24 lg:h-24 h-12 "
          />



          <img
            className="w-[44vw]"
            src={urlForImage(product.images[0]).url()!}
            alt={product.alt}
          />
        </div>
          <div className="xlg:ml-4  mt-16">
          <p className="text-2xl font-  tra cking-wider  ">
            {product.title}
          </p>
          <h1 className="text-xl font-semibold text-gray-800 opacity-40 sm:text-lg">
            {product.category}
          </h1>

          <div className="mt-6">
            <p className="font-semibold text-lg ">Select Sizes</p>
            <div className="flex gap-x-6 items-center flex-wrap">
              {product.sizes.map((item, index) => (
                <div
                  key={index}
 
                >
  
                  <div
                    id="size"

                    className="block w-full p-2 border hover:bg-gray-100 hover:border-gray-100 rounded-full focus:outline-none focus:ring focus:border-blue-300"
                  >

                    <option key={item} value={item} >
                      {item}
                    </option>

                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-x-6 mt-6 items-center flex-wrap">
            <p className="text-lg font-semibold">Quantity : </p>
            <div className="flex gap-x-5 items-center">
              <button
                className="w-12 h-12 flex items-center justify-center  bg-gray-200 shadow-2xl rounded-full cursor-pointer text-gray-800
        text-xl
        "
                onClick={decQty}
              >
                <AiOutlineMinus/>

              </button>
              {qty}
              <button
                className="w-12 h-12 flex items-center justify-center  bg-gray-200 shadow-2xl rounded-full cursor-pointer text-gray-800
        text-xl border-black
        "onClick={incQty}
              >
                <AiOutlinePlus/>
                
              </button>
            </div>
          </div>
          <div className="flex items-center gap-x-6 mt-6 flex-wrap">
            <button className="space-x-2 flex bg-black text-white p-2  -lg" onClick={() => onAdd(product, qty)}>
              <FiShoppingCart className="mr-2 mt-1" />
              Add to Cart
            </button>

            <p className="text-3xl font-bold tracking-wider">${product.price}:00</p>
          </div>
        </div>

      </div>
    </div>
  );
}

