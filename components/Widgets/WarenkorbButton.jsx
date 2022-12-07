import Link from "next/link";
import { IoMdRestaurant } from "react-icons/io";
import { useSelector } from "react-redux";

const CloseButton = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <Link href="/warenkorb" className="mt-2 relative">
      <IoMdRestaurant size={40} className="text-3xl text-five" />
      {/* How many Items in Warenkorb ? */}
      <span className="w-6 h-6 grid place-items-center absolute -bottom-1 -right-1 bg-blue-800 text-white rounded-full font-headFont">
        {cart.products.length === 0 ? "0" : cart.products.length}
      </span>
    </Link>
  );
};

export default CloseButton;
