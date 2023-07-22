 
//     <main className="flex justify-center mt-12 ">
//       <section className="w-[1160px] px-12 md:px-4 sm:px-2 py-4 ">
//         <h2 className="font-sans text-3xl font-bold">Shopping Cart</h2>

//         <div className=" gap-x-8 mt-6 justify-between grid xl:grid-cols-4 lg:grid-cols-3 md::grid-cols-3">
//         {cartItems.map((item: Icart) => (
//           <div className="md:col-span-3  mb-12 sm:flex md:flex md:justify-between">
//             {/* <div className="flex justify-between"> */}
//               <div className="md:flex xs:flex gap-x-8 sm:flex">
//                 <img
//                   src={urlForImage(item?.images[0]).url()}

//                   className="md:w-40 h-44 object-contain rounded-xl"
//                   alt="coer"
//                 />

//                 <div className="flex w-full w-[30vw] mx-auto flex-col  ">
//                   <p className="text-xl flex mb-2">{item.title}</p>
//                   <p className="text-lg mb-2 font-semibold opacity-50 ">{item.category}</p>
//                   <p className="font-semibold  mb-2 text-lg">Delivery Estimation</p>
//                   <p className="font-lg mb-2 text-yellow-500 font-bold">5 Working Days</p>

//                   <p className="font-bold text-lg">${item.price}</p>
//                 </div>
//               </div>
//               <div className="flex flex-col justify-between items-end">
//                 <div className="cursor-pointer">
//                   <Trash2Icon  onClick={() => removeCartItem(item._id)}/>
//                 </div>
//                 <div className="flex gap-x-5 items-center">
//                   <button
//                     className="w-12 h-12 flex items-center justify-center  bg-gray-200 shadow-2xl rounded-full cursor-pointer text-gray-800
//             text-xl
//             " onClick={() => toggleCartItemQuantity(item._id, 'dec')  }
//                   >
//                     -
//                   </button>
//                   {item.quantity}
//                   <button
//                     className="w-12 h-12 flex items-center justify-center  bg-gray-200 shadow-2xl rounded-full cursor-pointer text-gray-800
//             text-xl border-black
//             " onClick={() => toggleCartItemQuantity(item._id, 'inc')}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             {/* </div> */}
//           </div>
// ))}
//           <div className="  flex-col p-8 bg-gray-50  ">
//             <h3 className="text-start font-bold mb-6 text-lg">Order Summary</h3>
// <div className="flex w-[14vw] mb-7 justify-between">
//             <div className="  gap-x-2 justify-between">
//                 <p className="mb-6">
//                 Quantity
//                 </p>

//                 <p>Sub Total</p>
//             </div>

//             <div className="gap-x-2 justify-between">
// <p className="mb-6">2 Product</p>
//                 <p>$2180</p>
//             </div>
//             </div>

//             <button className="p-2 bg-black text-lg text-white">
//                 Process to Checkout
//             </button>
//           </div>
//         </div>
//       </section>
//     </main>











<div className={nav ? " mt-5 fixed md:hidden left-0  w-full h-full border-r border-r-gray-200 bg-white flex   flex-col  " : "hidden"} >
      
<Link href="/cart/">
  <div className="   flex-row rounded-full bg-[#f1f1f1]   mx-auto w-12 h-12   items-center">
    <div className="flex justify-center items-center mx-   mx-auto">
      <FiShoppingCart className="my-3 mx-auto" size={25} />
    </div>
    <div className="bg-red-500 rounded-full mx-auto text-center absolute   ml-[2rem] text-center mt-[-3rem] h-6 px-2"><h1 className="text-center text-white">
      {totalQuantities}
    </h1></div>
  </div>
</Link>

  <Link href={""} className="mx-5 text-lg font-medium mt-3 text-center">
    Female
  </Link>
  <Link href={""} className="mx-5 text-lg font-medium mt-3 text-center">
    Male
  </Link>
  <Link href={""} className="mx-5 text-lg font-medium mt-3 text-center">
    Kids
  </Link>
  <Link href={""} className="mx-5 text-lg font-medium mt-3 mb-12 text-center">
    All Products
  </Link>
</div>
</div>
