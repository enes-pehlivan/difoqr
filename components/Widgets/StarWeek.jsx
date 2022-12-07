import Image from "next/image";

const StarWeek = () => {
  return (
    <div>
      <div className="relative bg-green-500 rounded-lg  w-40 h-14 flex items-center ">
        <Image
          src="/images/star.png"
          alt="Star"
          width={30}
          height={30}
          className="ml-1"
        />
        <div className="absolute top-1 left-11  ">
          <span className="text-white">Sterne der Woche</span>
        </div>
      </div>
    </div>
  );
};

export default StarWeek;
