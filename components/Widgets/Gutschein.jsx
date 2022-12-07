import { BsFillCheckCircleFill } from "react-icons/bs";

const Gutschein = () => {
  return (
    <div className="mx-3 mt-2">
      <h2 className="font-boldFont mb-2">Haben Sie einen Gutschein ?</h2>
      <div className="bg-white px-3 py-1 rounded-lg">
        <div className="flex items-center gap-x-2">
          <span>Rabatt</span>
          <BsFillCheckCircleFill className="text-green-500" />
        </div>
      </div>
    </div>
  );
};

export default Gutschein;
