
 
import { IProduct } from "../type";
import { client } from "../../../sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
 
 
 
export default async function  Product( ) {



  const { productlist} = await showproductlist()

   console.log(productlist)

  return (
    <div className="flex justify-center mt-12">


 
      <div className="w-[1248px] px-6 md:px-4 sm:px-2 py-4 flex justify-center">
        <div className="grid grid-cols-4 xs:grid-cols-1 xlg:grid-cols-2 lg:grid-cols-4 mb-12 gap-4">

          {productlist.map((product :IProduct) => (
            <div key={product._id} className="mb-8 gap-12">
              <Link
                key={product._id}
                href={`/productdetail/${product.slug.current}`}
              >
                {" "}
                <Image
                  alt="img"
                  width={60}
                  height={100}
                  src={urlForImage(product.images[0]).url()}
                  className="w-full h-full object-cover brightness-75 group-hover:brightness-100 duration-300 group-hover:scale-110"
                />
              
              <div className="flex flex-col gap-y-1 my-3 "> 
              <p>{product.title}</p>
              <p>{product.category}</p>
              <p>${product.price}.00</p>
           
              </div>
              </Link>
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
