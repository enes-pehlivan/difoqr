import Image from "next/image";
import Link from "next/link";
import { RiShoppingCartLine, RiUser3Line } from "react-icons/ri";
import { IoMdRestaurant } from "react-icons/io";

const BottomBar = () => {
  return (
    <div className="flex justify-evenly items-center py-1 bg-five text-white text-sm rounded-t-lg">
      <div className="flex flex-col items-center justify-center cursor-pointer">
        <RiUser3Line size={40} />
        <span>Profile</span>
      </div>
      <Link
        href="/speisekarte"
        className="flex flex-col items-center justify-center gap-y-1 cursor-pointer"
      >
        <IoMdRestaurant size={40} />
        <span>Speisekarte</span>
      </Link>
      <Link
        href="/warenkorb"
        className="flex flex-col items-center justify-center gap-y-1 cursor-pointer"
      >
        <RiShoppingCartLine size={40} />
        <span>Warenkorb</span>
      </Link>
    </div>
  );
};

export default BottomBar;
