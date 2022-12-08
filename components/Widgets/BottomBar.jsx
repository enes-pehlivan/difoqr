import Image from "next/image";
import Link from "next/link";
import { RiShoppingCartLine, RiUser3Line } from "react-icons/ri";
import { IoMdRestaurant } from "react-icons/io";
import { GoHome } from "react-icons/go";

const BottomBar = () => {
  return (
    <div className="flex justify-evenly items-center py-1 bg-five text-white text-sm rounded-t-lg">
      <Link
        href="/auth"
        className="flex flex-col items-center justify-center cursor-pointer"
      >
        <RiUser3Line size={40} />
        <span>Profile</span>
      </Link>
      <Link
        href="/home"
        className="flex flex-col items-center justify-center gap-y-1 cursor-pointer"
      >
        <GoHome size={40} />
        <span>Home</span>
      </Link>
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
