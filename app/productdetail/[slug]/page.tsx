
import { client } from "../../../sanity/lib/client";
import { IProduct } from "../../components/type";

import ProductDtl from "@/app/components/productdtl";
 

export default async function ProductDetail({params,}: {params: { slug: string };}) {

  const product = await getData(params.slug);

  console.log(product);
   
  return (
    <main className="   w-full ">
      <div className="flex justify-center">
      <section className="w-[1248px]  py-4 ">
<ProductDtl product={product[0]} />
</section>
</div>
    </main>
  );
}


export const generateStaticParams = async () => {
  const query = `*[_type == "product"]{
        _id,
        slug{
        current
        }
        }
      `;

  const product = await client.fetch(query);
  return product.map((product: IProduct) => ({
    slug: product.slug.current,
  }));
};


export const getData = async (params: string) => {
  const query = `*[_type == "product" && slug.current  == "${params}"]{
       _id,
        title ,
        category,
        slug ,
        price ,
        images, 
        sizes
    }
  `;
  const product = await client.fetch(query);

  return product;
};
