import Image from 'sanity'
export interface IProduct {
    alt: string;
    on_sale: any;
    quantity: any;
    sale_price: any;
    category: "string";
    _id : string ,

    title : string ,
    slug : {
        current : string;
    
    } ,
    price : number,
    images : Image[],
    sizes: string[]
}


export interface Icart  {
images : Image[],
title : string,
price : number,
_id : string,
quantity:number,
totalPrice : number,
totalQuantities : number,
category : string
}