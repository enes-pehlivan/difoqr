import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const ProductDetails = () => {
  return (
    <div className="flex flex-col  gap-y-5 mx-5">
      <div className="flex items-center justify-center">
        <div className="relative  w-44 h-56">
          <Image
            src="/images/lattemacchiato.png"
            alt="Latte Macchiato"
            fill
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="flex flex-col items-start gap-y-2">
        <div className="flex gap-x-24 items-center">
          <h2 className="text-xl  font-boldFont font-semibold">
            Latte Macchiato
          </h2>
          <div className="flex items-center gap-x-1">
            <AiFillStar className="text-orange-500" size={25} />
            <span className="text-lg font-bold">4.8</span>
          </div>
        </div>
        <div className="flex  gap-x-4">
          <span className="bg-white font-semibold px-4 py-1 rounded-full">
            Milch
          </span>
          <span className="bg-white font-semibold  px-4 py-1 rounded-full">
            Espresso
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
