export interface IProduct {
    category: "string";
    _id : string ,

    title : string ,
    slug : {
        current : string;
    
    } ,
    price : number,
    images : array
}


export interface Icart  {
images : array,
title : string,
price : number,
_id : string,
quantity:number,
totalPrice : number,
totalQuantities : number,
category : string
}