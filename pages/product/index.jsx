import { useState } from "react";
import Image from "next/image";
import {
  AiFillStar,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import BackButton from "../../components/Widgets/BackButton";
import WarenkorbButton from "../../components/Widgets/WarenkorbButton";
import { CiCoffeeCup } from "react-icons/ci";
import { addProduct } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const index = () => {
  // Latte Macchiato Price
  const [prices, setprices] = useState([2.9, 3.8, 4.5]);
  const [price, setPrice] = useState(prices[0]);
  const [activeSize, setactiveSize] = useState(0);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const foodItems = [
    {
      id: 1,
      name: "Latte Macchiato",
      desc: "Milch, die mit einem Espresso gekennzeichnet ist.",
      price: 2.9,
    },
  ];

  // Size Price Difference
  const handleSize = (sizeIndex) => {
    const difference = prices[sizeIndex] - prices[activeSize];
    setactiveSize(sizeIndex);
    changePrice(difference);
  };

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleClick = () => {
    dispatch(addProduct({ ...foodItems[0], price, quantity: 1 }));
  };

  console.log(cart);

  return (
    <div className="bg-fourth h-screen w-screen flex flex-col justify-between">
      {/* Back and Close Button */}
      <div className="flex items-center justify-between mx-4">
        <BackButton />
        <WarenkorbButton />
      </div>

      {/* Product Image */}
      <div>
        <div className="flex flex-col  gap-y-5 mx-5">
          <div className="flex items-center justify-center">
            <div className="relative  w-44 h-56">
              <Image
                src="/images/lattemacchiato.png"
                alt="Latte Macchiato"
                fill
                className="rounded-xl"
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-y-2">
            <div className="flex gap-x-24 items-center">
              <h2 className="text-xl  font-boldFont font-semibold">
                Latte Macchiato
              </h2>
              <div className="flex items-center gap-x-1">
                <AiFillStar className="text-orange-500" size={25} />
                <span className="text-lg font-bold">4.8</span>
              </div>
            </div>
            <div className="flex  gap-x-4">
              <span className="bg-white font-semibold px-4 py-1 rounded-full">
                Milch
              </span>
              <span className="bg-white font-semibold  px-4 py-1 rounded-full">
                Espresso
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Size */}
      <div>
        <h2 className="ml-5 mb-2 text-2xl font-headFont font-light">Größe</h2>
        <div className="flex justify-evenly mx-3 rounded-lg bg-zinc-300 font-headFont">
          <div
            className="flex items-center rounded-full hover:bg-five hover:text-white px-4 py-2"
            onClick={() => handleSize(0)}
          >
            <span>Small</span>
            <CiCoffeeCup size={20} />
          </div>
          <div
            className="flex items-center rounded-full hover:bg-five hover:text-white px-3 py-1"
            onClick={() => handleSize(1)}
          >
            <span>Medium</span>
            <CiCoffeeCup size={25} />
          </div>
          <div
            className="flex items-center rounded-full hover:bg-five hover:text-white px-4 py-1"
            onClick={() => handleSize(2)}
          >
            <span>Large</span>
            <CiCoffeeCup size={30} />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="rounded-lg border-t-[2px] bg-[#dadbd9]">
        <div className="py-2">
          <h2 className=" mb-1 text-xl font-headFont font-light px-5">
            Beschreibung
          </h2>
          <div className="flex justify-center items-center w-screen mt-3 px-5">
            <span className="text-base font-thin">
              Ein Latte Macchiato ist Milch, die mit einem Espresso
              gekennzeichnet ist.
            </span>
          </div>
        </div>
      </div>

      {/* Add to Card */}
      <div>
        <div className="flex flex-col justify-evenly pb-2 gap-y-3 pt-3 items-center  bg-[#031a70]  rounded-t-lg">
          <div className="flex items-center justify-between w-screen px-5">
            <span className="text-white text-2xl">{price} $</span>

            <div className="flex gap-x-1 items-center text-fourth text-2xl">
              <AiOutlineMinusCircle className="" size={35} />
              {cart.products.length === 0 ? "0" : cart.products.length}
              <AiOutlinePlusCircle size={35} />
            </div>
          </div>
          <div>
            <button
              onClick={handleClick}
              className=" bg-fourth rounded-lg px-24 py-2"
            >
              IN DEN WARENKORB
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
