import Link from "next/link";
import { AiOutlineCloseCircle } from "react-icons/ai";

const CloseButton = () => {
  return (
    <Link href="/home" className="mt-2">
      <AiOutlineCloseCircle size={40} className="text-3xl text-five" />
    </Link>
  );
};

export default CloseButton;
