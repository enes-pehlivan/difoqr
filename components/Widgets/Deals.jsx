import Image from "next/image";

const Deals = () => {
  return (
    <div>
      <div className="relative bg-red-500 rounded-lg  w-40 h-14 flex items-center ">
        <Image
          src="/images/discount.png"
          alt="Rabatt"
          width={30}
          height={30}
          className="ml-1"
        />
        <div className="absolute top-1 left-11">
          <span className="text-white">Angebot der Woche</span>
        </div>
      </div>
    </div>
  );
};

export default Deals;
