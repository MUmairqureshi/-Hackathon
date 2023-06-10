import React from "react";
import event1 from "../../../../public/event1.png";
import event2 from "../../../../public/event2.png";
import event3 from "../../../../public/event3.webp";

import Image from "next/image";
function PromotionalCards() {
  return (
    <div className="mt-20 text-center">
      <div>
        <h1 className="text-[#0062F5]">PROMOTIONS</h1>
        <h1 className="text-3xl mt-2 font-bold">Our Promotions Events</h1>
      </div>
      <div className="flex flex-row my-20">
        <div className="flex flex-col mx-20 ">
          <div className="flex flex-row bg-[#A6A6A6] py-5 w-[28rem] h-[14rem]">
            <h1 className="w-36 text-xl font-bold flex flex-col justify-center text-left ml-5">
              GET UP TO 60%
              <br />
              <span className="text-base font-normal">
                For the summer season
              </span>
            </h1>
            <Image src={event1} alt="event" />
          </div>
          <div className="flex flex-col bg-[#212121] mt-5 w-[28rem] h-[14rem] text-white justify-center items-center">
            <h1 className="font-bold text-3xl">GET 30% Off</h1>
            <h1 className="mt-5">USE PROMO CODE</h1>
            <button className="bg-[#474747] text-xl w-80 mt-3 rounded-lg py-2">
              DINEWEEKENDSALE
            </button>
          </div>
        </div>
        <div className="bg-[#EFE1C7] flex flex-col text-left pl-5 ml-[-40px]">
          <h1 className="mt-10">Flex Sweatshirt</h1>
          <div className="flex flex-row">
            <h1 className="line-through">$100.00 </h1>
            <h1 className="font-semibold mx-3">$75.00</h1>
          </div>
          <Image src={event2} alt="event" className="pt-4" />
        </div>
        <div className="bg-[#D7D7D9] flex flex-col text-left pl-5 ml-5">
          <h1 className="mt-10">Flex Push Button Bomber</h1>
          <div className="flex flex-row">
            <h1 className="line-through">$225.00</h1>
            <h1 className="font-semibold mx-3">$190.00</h1>
          </div>
          <Image src={event3} alt="event" className="pt-4" />
        </div>
      </div>
    </div>
  );
}

export default PromotionalCards;