import React from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { useSelector } from "react-redux";

const Quantity = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="flex gap-x-1 items-center text-fourth">
      <AiOutlineMinusCircle className="" size={35} />
      <div>
        {cart.products.map((product) => (
          <span className="text-2xl">{product.quantity}</span>
        ))}
      </div>
      <AiOutlinePlusCircle size={35} />
    </div>
  );
};

export default Quantity;
