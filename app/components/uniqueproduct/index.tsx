import Link from "next/link";
import feature from '../../../public/feature.jpg'
import Image from "next/image";


export function Uniquepro() {
    return (
        <div className="w-full h-full mx-auto ">
            <div className="w-full mx-auto ">
             <div className="grid md:grid-cols-2 grid-cols-2">
                <div className="    xl:flex hidden "></div>
                <h1 className="xl:w-[28rem] xl:col-span-1 col-span-2 text-start md:text-5xl text-5xl  justify-start content-start mx-auto font-bold text-start xl:text-left mb-10  ">Unique and Authentic Vintage Designer Jewellery</h1>
                </div>
                <div className="grid   lg:grid-cols-2 xl:grid-cols-4   md:grid-cols-2 grid-cols-2">
                    <p className=" xl:text-8xl text-5xl 	mix-blend-multiply  text-gray-100 font-extrabold">Different from others</p>
                    <div className=" absolute flex flex-col">
                        <span>
                            <p className="mb-4 font-semibold text-xl md:text-xl lg:text-xl  
                             xl:w-[16rem] lg:w-[18rem] w-[8rem] md:w-[20rem]  tracking-wide leading-5 ">Using Good Quality Materials</p>
                            <p className="mb-6  w-[8rem] md:w-[14rem] md:w-[14rem]  md:text-lg text-md"> Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        </span>
                        <span>
                            <p className="mb-4 font-semibold text-xl w-[8rem] md:text-xl lg:text-xl   xl:w-[14rem]  tracking-wide leading-5  ">Modern Fashion Design</p>
                            <p className="mb-6   w-[8rem] md:w-[14rem]  md:text-lg text-md">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        </span>
                    </div>

                    <div className="flex flex-col mb-8">
                        <span>
                            <p className=" mb-4 font-semibold text-xl md:text-xl lg:text-xl   xl:w-[12rem]  tracking-wide    leading-5 ">100% Handmade Products</p>
                            <p className=" mb-6   w-[8rem] md:w-[14rem]  md:text-lg text-md ">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        </span>
                        <span>
                            <p className="mb-4 font-semibold text-xl md:text-xl lg:text-xl   xl:w-[14rem] leading-5  tracking-wide  ">Discount for Bulk Orders</p>
                            <p className=" mb-6   w-[8rem] md:w-[14rem]  md:text-lg text-md">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        </span>
                    </div>
                     <div className="md:flex col-span-2 lg:col-span-2 gap-8 ">
                       <span className=" mb-14"> <Image src={feature} className="w-[18rem] h-[22rem] " alt="feature" />
                       </span>
                       <span>
                         <p className="mb-10 xl:w-[12rem] xl:mt-0 lg:mt-12 lg:w-[24rem] w-[16rem] lg:racking-wide text-lg space-x-4">This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                       
                    <Link href="/product" className="text-center bg-black text-white p-3">See All Product </Link>
                    </span>
                    </div>
                </div>
            </div>
        </div>
    )
}