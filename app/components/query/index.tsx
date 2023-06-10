"use client"
import Product from "../../product/page";
import { client } from "../../../../sanity/lib/client";
import { IProduct } from "../type";
export default async function Products() {
    const {productlist}  = await showproductlist()
    console.log(productlist)

    return (

<div>
  <h1></h1>productlist
{productlist.map((product: IProduct , index : number) => (
<div key={index}>
  <Product  productlist={product}/> 
  </div>
))}
</div>

    )}
export const showproductlist = async() => {
    const query = `*[_type == "product"]{
      _id,
      title ,
      slug ,
      price ,
      category,
      images,  
    }`;
    const productlist   = await client.fetch(query);
    return {
      productlist,
    };
  };
  