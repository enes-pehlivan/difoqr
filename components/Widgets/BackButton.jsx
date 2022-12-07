import Link from "next/link";
import { IoArrowBackCircle } from "react-icons/io5";

const BackButton = () => {
  return (
    <Link href="/home" className="mt-2">
      <IoArrowBackCircle size={40} className="text-3xl text-five" />
    </Link>
  );
};

export default BackButton;
