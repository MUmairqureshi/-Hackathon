
import Link from "next/link";
import React from "react";
import { FacebookIcon, TwitterIcon, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import logo from '../../../public/Logo.png'

function Footer() {
  const socialLinks = [
    {
      icon: <FacebookIcon  fill="#000"/>,
      link: "#",
    },
    {
      icon: <TwitterIcon  fill="#000"/>,
      link: "#",
    },
    {
      icon: <LinkedinIcon fill="#000"  />,
      link: "#",
    },
  ];

  const company = [
    {
      name: "About",
    },
    {
      name: "Terms of Use",
    },
    {
      name: "Privacy Policy",
    },
    {
      name: "How it Works",
    },
    {
      name: "Contact Us",
    },
  ];

  const support = [
    {
      name: "Support Career",
    },
    {
      name: "24th Service",
    },
    {
      name: "Quick chat",
    },
  ];

  const contact = [
    {
      name: "WhatsApp",
    },
    {
      name: "Support 24th",
    },
  ];

  return (
    <main className="gap-12 w-full mx-auto bg-secondary-color flex justify-between   ">
      <section className="w-[1280px]       py-16">
        <div className="md:grid  grid-cols-1  md:grid-cols-3 xl:grid-cols-5 lg:grid-cols-5        justify-between  ">

        <div className="col-span-3 mb-8  md:col-span-2">
        <Link href={'/'} >
            <Image src={logo} alt="logo" width={150} height={0}/>
            </Link>

            <p className="md:w-80  mt-3">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>

            <div className="flex gap-4 mt-4 ">
              {socialLinks.map((item, index) => (
                <Link
                  target="_blank"
                  key={index}
                  href={item.link}
                  className="p-3 bg-gray-300 hover:scale-105 hover:text-black transition-all rounded-lg flex justify-center items-center text-slate-900"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text_gradient text-xl font-bold">
              Company
            </h2>
            <div className="mt-4">
              {company.map((item, index) => (
                <Link href={'#'} key={index}>
                  <p className="text-black truncate mt-1">
                    {item.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text_gradient text-xl font-bold">
              Support
            </h2>
            <div className="mt-4">
              {support.map((item, index) => (
                <Link
                  href={`#`}
                  className="text-black  mt-1"
                  key={index}
                >
                  <p>{item.name}</p>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text_gradient text-xl font-bold">
              Contact
            </h2>
            <div className="mt-4">
              {contact.map((item, index) => (
                <Link
                  href={`#`}
                  className="text-black  mt-1"
                  key={index}
                >
                  <p>{item.name}</p>
                </Link>
              ))}

            </div>
          </div>

          
        </div>
      </section>
    </main>
  );
}

export default Footer;