import Image from "next/image";
import React from "react";

const Campaign = () => {
  return (
    <div>
      <div className="relative flex justify-center items-center ">
        <Image
          src="/images/campaign.png"
          alt="Campaign"
          width={350}
          height={350}
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Campaign;
