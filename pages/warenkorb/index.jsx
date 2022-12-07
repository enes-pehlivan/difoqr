import Image from "next/image";
import React from "react";
import BackButton from "../../components/Widgets/BackButton";
import WarenkorbButton from "../../components/Widgets/WarenkorbButton";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Quantity from "../../components/Widgets/Quantity";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../redux/cartSlice";

const index = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <div className="bg-fourth h-screen flex flex-col justify-between">
      {/* Back Button & Page Title & Close Button */}
      <div className="flex justify-between mx-4 items-center">
        <BackButton />
        <h1 className="text-2xl text-center font-headFont font-semibold">
          Warenkorb
        </h1>
        <WarenkorbButton />
      </div>

      {/* Products */}
      <div className="bg-white mx-3 py-4 mt-2 rounded-lg flex flex-col gap-y-5">
        {/* Item 1 */}
        {cart.products.map((product) => (
          <div className="flex justify-evenly items-center" key={product.id}>
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
                {product.name}
              </h2>
              <div className="flex gap-x-3 items-center">
                <span className="text-2xl">{product.quantity}</span>
                <span className="text-xl font-boldFont font-medium">
                  {product.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gutschein */}
      <div>
        <div className="mx-3 mt-2">
          <h2 className="font-boldFont mb-2">Haben Sie einen Gutschein ?</h2>
          <div className="bg-white px-3 py-1 rounded-lg">
            <div className="flex items-center gap-x-2">
              <span>Rabatt</span>
              <BsFillCheckCircleFill className="text-green-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div>
        {cart.products.map((product) => (
          <div className="mx-3 mt-2">
            <h2 className="font-boldFont mb-2">
              Zusammenfassung der Bestellung
            </h2>
            <div className="bg-white px-3 py-1 rounded-lg">
              <div className="flex justify-between items-center gap-x-2">
                <span>Artikel Gesamt</span>
                <span>{cart.total} $</span>
              </div>
              <div className="flex justify-between items-center gap-x-2">
                <span>Gutschein 15%</span>
                <span>-2,22 $</span>
              </div>
              <div className="flex justify-between items-center gap-x-2 mt-2">
                <span className="text-base font-headFont font-semibold">
                  TOTAL
                </span>
                <span className="text-base font-headFont font-semibold">
                  {cart.total} $
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Checkout Button */}
      <div>
        <div className=" bg-five text-white rounded-t-lg px-4 py-5 flex justify-center items-center">
          <button
            onClick={() => dispatch(reset())}
            className="text-base font-headFont font-medium"
          >
            JETZT BEZAHLEN
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
