import Image from "next/image";
import React from "react";
import TableNum from "../../components/Widgets/TableNum";

const index = () => {
  return (
    <div>
      <div className="relative w-36 h-44 ">
        <Image
          src="/images/lattemacchiato.png"
          alt="Latte Macchiato"
          fill
          className="rounded-lg"
        />
        <div className="absolute top-1 right-1">
          <span className="bg-white rounded-md px-2 py-1 font-boldFont text-xs">
            2,90 $
          </span>
        </div>
        <div className="absolute bottom-0 left-0 border-b-2">
          <span className="bg-white rounded-md px-2 py-1 font-boldFont text-xs">
            Latte Macchiato
          </span>
        </div>
      </div>
    </div>
  );
};

export default index;
