// "use client";
// import { useRef } from "react";
// import Link from "next/link";
// import {
//   AiOutlineMinus,
//   AiOutlinePlus,
   
// } from "react-icons/ai";
// import { TiDeleteOutline } from "react-icons/ti";
// import toast from "react-hot-toast";
// import { urlForImage } from "../../../sanity/lib/image";
// import Image from "next/image";
//  import { Icart } from '../components/type'
// import { useStateContext } from "../components/contextapi/useContext"; // context
 

// export default function Cart() {
//   const {
//     totalPrice,
//     totalQuantities,
//     cartItems,
//     setShowCart,
//     toggleCartItemQuantity,
//     removeCartItem,
//   } = useStateContext();
// console.log(cartItems)
// console.log(totalQuantities)
 


//   return (
//     <div className="des">
//       <br />
//       {/* <main> */}

//       <div className="basket">
//         <div className="card">
//           <div className="row">
//             <div className="col-md-8 cart">
//               <div className="title">
//                 <div className="row">
//                   <div className="col">
//                     <h4>
//                       <b>Shopping Cart</b>
//                     </h4>
//                   </div>
//                 </div>
//               </div>
//                {  cartItems.map((item : Icart) => (


//                     <div key={item._id} className="row border-top border-bottom">
//                       <div className="row main align-items-center">
//                         <div className="col-2"><Image className="img-fluid" src={urlForImage(item?.images[0]).url()} alt="img" /></div>
//                         <div className="col">

//                           <div className="row">{item.title} </div>
//                                                     <div className="row">{item.category} </div>
                                                    
//                                                     <div className="row">Delivery Estimation </div>
// <div className="row">5 Working Days </div>



//                         </div>

//                         <div className="col">
//   <span
//                             className='minus'
//                             onClick={() =>
//                               toggleCartItemQuantity(item._id, 'dec')
//                             }
//                           >
//                             <AiOutlineMinus />
//                           </span>
//                           <span className='num'>{item.quantity}</span>
//                           <span
//                             className='plus'
//                             onClick={() =>
//                               toggleCartItemQuantity(item._id, 'inc')
//                             }
//                           >
//                             <AiOutlinePlus />
//                           </span>
//                         <div className="col"> <button > <span className="close"  onClick={() => removeCartItem(item._id)}>   <TiDeleteOutline /></span> </button> </div>
//                       </div>
//                     </div>
//                     </div>
//                                      ))}

            
//             <div className="col-md-4 summary">
//               <div>
//                 <h5>
//                   <b>Summary</b>
//                 </h5>
//               </div>

//               <div className="row">
//                 <div className="col">ITEMS {totalQuantities}</div>

//                 <div className="col text-right">
//                   {" "}
//                   Sub Total &euro; {totalPrice}
//                 </div>
//               </div>

//               <Link href="/contact" className="btn btn-dark ms-2 px-3 py-2 ">
//                 CHECKOUT
//               </Link>
//             </div>

//             {/* </main> */}
//           </div>
//         </div>
//       </div>
//     </div>
// </div>
//   );
// }
