

import { IProduct } from "../components/type";
import { client } from "../../sanity/lib/client";
import Link from "next/link";

import { urlForImage } from "../../sanity/lib/image";

export default async function  Product( ) {
  const  productlist : IProduct[] = await showproductlist()

   
  return (
    <div className="flex justify-center mt-12 w-full">
 
       <div className="    sm:px-2 py-4 flex justify-center">
        <div className="grid  grid-cols-2 sm:grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:mb-6 gap-x-4 md:gap-x-8">

          {productlist.map((product ) => (
            <div key={product._id} className=" ">
              <Link
                key={product._id}
                href={`/productdetail/${product.slug.current}`}
              >
                {" "}
                <img
                  alt="img"
                  src={urlForImage(product.images[0]).url()}
                  className=" md:gap-x-8 gap-x-4 md:w-[40vw]  object-cover brightness-75 group-hover:brightness-100 duration-300 group-hover:scale-110"
                />
              
              <div className="flex mx-auto flex-col mb-12 gap-y-1 my-3 w-full"> 
              <p className="font-semibold  text-xl">{product.title}</p>
              <p className="text-slate-300 text-lg font-bold">{product.category}</p>
              <p className="font-bold text-lg">${product.price}.00</p>
           
              </div>
              </Link>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}
 const showproductlist = async() => {
  const query =  await client.fetch(`*[type == "Female"]{
    _id,
    title ,
    slug ,
    price ,
    category,
    images,  
  }`);
  return (
    query
  );
};
