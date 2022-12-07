import React from "react";
import ProductDetails from "../../components/MenuItem/ProductDetails";
import AddToCard from "../../components/Widgets/AddToCard";
import BackButton from "../../components/Widgets/BackButton";
import CloseButton from "../../components/Widgets/CloseButton";
import Description from "../../components/Widgets/Description";
import Nutritional from "../../components/Widgets/Nutritional";
import Quantity from "../../components/Widgets/Quantity";
import Size from "../../components/Widgets/Size";

const index = () => {
  return (
    <div className="bg-fourth h-screen w-screen flex flex-col justify-between">
      {/* Back and Close Button */}
      <div className="flex items-center justify-between mx-4">
        <BackButton />
        <CloseButton />
      </div>

      {/* Product Image */}
      <div>
        <ProductDetails />
      </div>

      {/* Size */}
      <div>
        <h2 className="ml-5 mb-2 text-2xl font-headFont font-light">Größe</h2>
        <Size />
      </div>

      <div>
        <Nutritional />
      </div>

      {/* Description */}
      <div className="rounded-lg border-t-[2px] bg-[#dadbd9]">
        <Description />
      </div>

      {/* Add to Card */}
      <div>
        <AddToCard />
      </div>
    </div>
  );
};

export default index;
