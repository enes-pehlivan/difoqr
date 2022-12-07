import React from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import Quantity from "./Quantity";

const AddToCard = () => {
  return (
    <div className="flex flex-col justify-evenly pb-2 gap-y-3 pt-3 items-center  bg-[#031a70]  rounded-t-lg">
      <div className="flex items-center justify-between w-screen px-5">
        <span className="text-white text-2xl">2,90 $</span>
        <Quantity />
      </div>
      <div>
        <button className=" bg-fourth rounded-lg px-24 py-2">
          IN DEN WARENKORB
        </button>
      </div>
    </div>
  );
};

export default AddToCard;
