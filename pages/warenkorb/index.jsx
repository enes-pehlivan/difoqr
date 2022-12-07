import Image from "next/image";
import React from "react";
import BackButton from "../../components/Widgets/BackButton";
import CheckoutButton from "../../components/Widgets/CheckoutButton";
import CloseButton from "../../components/Widgets/CloseButton";
import Gutschein from "../../components/Widgets/Gutschein";
import OrderPriceSummary from "../../components/Widgets/OrderPriceSummary";
import Quantity from "../../components/Widgets/Quantity";

const index = () => {
  return (
    <div className="bg-fourth h-screen flex flex-col justify-between">
      {/* Back Button & Page Title & Close Button */}
      <div className="flex justify-between mx-4 items-center">
        <BackButton />
        <h1 className="text-2xl text-center font-headFont font-semibold">
          Warenkorb
        </h1>
        <CloseButton />
      </div>

      {/* Products */}
      <div className="bg-white mx-3 py-4 mt-2 rounded-lg flex flex-col gap-y-5">
        {/* Item 1 */}
        <div className="flex justify-evenly items-center">
          <div className="relative">
            <Image
              src="/images/lattemacchiato.png"
              alt="lattemacchiato"
              width={100}
              height={100}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-y-5 justify-between">
            <h2 className="text-xl font-boldFont font-semibold">
              Latte Macchiato
            </h2>
            <div className="flex gap-x-3 items-center">
              <Quantity />
              <span className="text-xl font-boldFont font-medium">2,90 $</span>
            </div>
          </div>
        </div>
        {/* Item 2 */}
        <div className="flex justify-evenly items-center">
          <div className="relative">
            <Image
              src="/images/waffle.jpg"
              alt="Waffle"
              width={100}
              height={100}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-y-5 justify-between">
            <h2 className="text-xl font-boldFont font-semibold">
              Belgian Waffle
            </h2>
            <div className="flex gap-x-3 items-center">
              <Quantity />
              <span className="text-xl font-boldFont font-medium">11,90 $</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gutschein */}
      <div>
        <Gutschein />
      </div>

      {/* Order Summary */}
      <div>
        <OrderPriceSummary />
      </div>

      {/* Checkout Button */}
      <div>
        <CheckoutButton />
      </div>
    </div>
  );
};

export default index;
