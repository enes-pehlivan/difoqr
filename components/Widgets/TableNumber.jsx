import Image from "next/image";
import React from "react";

const TableNumber = () => {
  return (
    <div>
      <div className="relative w-28 h-28">
        <Image
          src="/images/textbg.png"
          alt="Table Number"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute top-11 right-11 text-white font-boldFont">
        <span>Tisch: 08</span>
      </div>
    </div>
  );
};

export default TableNumber;
