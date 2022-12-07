import React from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const Quantity = () => {
  return (
    <div className="flex gap-x-1 items-center text-fourth">
      <AiOutlineMinusCircle className="" size={35} />
      <span className="text-2xl">1</span>
      <AiOutlinePlusCircle size={35} />
    </div>
  );
};

export default Quantity;
