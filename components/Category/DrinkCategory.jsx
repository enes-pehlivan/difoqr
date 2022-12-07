import React from "react";

const DrinkCategory = () => {
  return (
    <div className="flex  w-max justify-start gap-x-5 mx-4 gap-y-5 items-center">
      <span className="bg-third text-white hover:bg-third hover:text-white  px-4 py-2 w-max rounded-2xl">
        Kaffee
      </span>
      <span className="bg-primary hover:bg-third hover:text-white text-black px-4 py-2 w-max rounded-2xl">
        Coctail
      </span>
      <span className="bg-primary hover:bg-third hover:text-white text-black px-4 py-2 w-max rounded-2xl">
        Kalt Getranke
      </span>
      <span className="bg-primary hover:bg-third hover:text-white text-black px-4 py-2 w-max rounded-2xl">
        Alkolische Getranke
      </span>
      <span className="bg-primary hover:bg-third hover:text-white text-black px-4 py-2 w-max rounded-2xl">
        Juice
      </span>
    </div>
  );
};

export default DrinkCategory;
