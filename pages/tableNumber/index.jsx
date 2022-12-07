import Image from "next/image";
import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div className="h-screen bg-fourth flex flex-col justify-center items-center">
      <div className="flex flex-col bg-white px-5 py-5 rounded-lg items-center gap-y-5">
        <div className="relative">
          <Image src="/images/table.png" alt="Table" width={100} height={100} />
        </div>
        <h2 className="font-headFont">Bitte geben Sie Ihre Tischnummer ein.</h2>
        <div className="flex flex-col gap-y-3">
          <span className="font-semibold text-xl font-headFont">
            Tisch Nummer
          </span>
          <span className="text-2xl font-headFont border-b-2 border-red-500 text-center">
            8
          </span>
        </div>
        <Link
          href="/home"
          className="w-full bg-five text-white text-lg py-2 rounded-lg text-center"
        >
          OK
        </Link>
      </div>
    </div>
  );
};

export default index;
