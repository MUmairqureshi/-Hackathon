import React from "react";
import event1 from "../../../public/event1.png";
import event2 from "../../../public/event2.png";
import event3 from "../../../public/event3.webp";

import Image from "next/image";
function PromotionalCards() {
  return (
    <div className="w-full mx-auto">
    <div className="mt-20 text-center">
      <div>
        <h1 className="text-[#8b8bdf]">PROMOTIONS</h1>
        <h1 className="mt-2 text-3xl font-bold">Our Promotions Events</h1>
      </div>
      <div className="lg:flex sm:flex-row flex-col gap-6 my-20">
        <div className="flex flex-col ">
          <div className="justify-between md:flex sm:flex   bg-[#D7D7D9]  ">
            <h1 className="flex mx-auto flex-col justify-center ml-5 text-3xl font-bold text-left ">
              GET UP TO 60%
              <br />
              <span className="text-xl font-normal ">
                For the summer season
              </span>
            </h1>
            <Image src={event1} alt="event" />
          </div>
          <div className="mb-6 py-4  flex flex-col bg-[#212121] mt-5 lg:w-[38vw] w-full h-full text-white justify-center items-center">
            <h1 className="text-4xl font-bold">GET 30% Off</h1>
            <h1 className="mt-5">USE PROMO CODE</h1>
            <button className="bg-[#474747] text-xl p-4 mt-1 rounded-lg py-2">
              DINEWEEKENDSALE
            </button>
          </div>
        </div>
        <div className="lg:h-full md:flex md:gap-6">
        <div className="  mb-6  h-full bg-[#EFE1C7] flex flex-col text-left pl-5 ">
          <h1 className="mt-10">Flex Sweatshirt</h1>
          <div className="flex flex-row">
            <h1 className="line-through">$100.00 </h1>
            <h1 className="mx-3 font-semibold">$75.00</h1>
          </div>
          <Image src={event2} alt="event" className="pt-4 lg:h-full " />
        </div>
        <div className="  h-full   bg-[#D7D7D9] flex flex-col text-left pl-5  ">
          <h1 className="mt-10">Flex Push Button Bomber</h1>
          <div className="flex flex-row">
            <h1 className="line-through">$225.00</h1>
            <h1 className="mx-3 font-semibold">$190.00</h1>
          </div>
          <Image src={event3} alt="event" className="pt-4 lg:h-full " />
        </div>
      </div></div>
    </div></div>
  );
}

export default PromotionalCards;