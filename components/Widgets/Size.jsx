import React from "react";
import { CiCoffeeCup } from "react-icons/ci";

const SIze = () => {
  return (
    <div className="flex justify-evenly mx-3 rounded-lg bg-zinc-300 font-headFont">
      <div className="flex items-center rounded-full bg-five text-white px-4 py-2">
        <span>Small</span>
        <CiCoffeeCup size={20} />
      </div>
      <div className="flex items-center rounded-full hover:bg-five hover:text-white px-3 py-1">
        <span>Medium</span>
        <CiCoffeeCup size={25} />
      </div>
      <div className="flex items-center rounded-full hover:bg-five hover:text-white px-4 py-1">
        <span>Large</span>
        <CiCoffeeCup size={30} />
      </div>
    </div>
  );
};

export default SIze;
