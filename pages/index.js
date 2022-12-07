import Image from "next/image";
import React from "react";
import RestaurantName from "../components/Title/RestaurantName";
import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const index = () => {
  return (
    <div className="flex flex-col justify-evenly items-center bg-fourth h-screen">
      {/* Restaurant Logo */}
      <div className="relative">
        <Image src="/images/Logo.png" alt="Logo" width={300} height={300} />
      </div>

      {/* Restaurant Name & Welcome Text */}
      <div className="flex flex-col items-center gap-y-3">
        <RestaurantName />
        <h1 className="text-2xl font-bold font-boldFont text-slate-900">
          WILKOMMEN
        </h1>
      </div>

      {/* Menu and Waiter Button */}
      <div className="flex flex-col gap-y-4">
        <Link href="/tableNumber">
          <button className="bg-red-500 text-white font-medium font-headFont w-full py-2 px-4 rounded-lg ">
            SIEHE SPEISEKARTE
          </button>
        </Link>
        <Link
          href="/tableNumber"
          className="bg-white text-slate-900 border-[2px] border-red-500 font-medium font-headFont w-full py-2 px-4 rounded-lg "
        >
          FRAGEN SIE NACH EINEM KELLNER
        </Link>
      </div>

      {/* Social Media */}
      <div className="flex text-five text-3xl gap-x-5 ">
        <Link href="www.twitter.com">
          <FaTwitter />
        </Link>
        <FaFacebookF />
        <FaInstagram />
        <FaYoutube />
      </div>
    </div>
  );
};

export default index;
