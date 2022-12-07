import React from "react";
import DrinkCategory from "../../components/Category/DrinkCategory";
import MenuItem from "../../components/MenuItem/MenuItem";
import BackButton from "../../components/Widgets/BackButton";
import BottomBar from "../../components/Widgets/BottomBar";

const index = () => {
  return (
    <div className="h-screen bg-fourth">
      {/* Back Button & Menu Title */}
      <div className="flex justify-start items-center gap-x-16 mx-5">
        <BackButton />
        <h1 className="text-2xl text-center">SPEISEKARTE</h1>
      </div>

      {/* Drink or Food */}
      <div className="mt-3">
        <div className="flex gap-x-5 justify-center items-center ">
          <span className="text-base font-boldFont font-semibold hover:bg-secondary hover:text-white px-4 py-2 rounded-lg">
            Getranke
          </span>
          <span className="text-base font-boldFont font-semibold hover:bg-secondary hover:text-white px-4 py-2 rounded-lg">
            Essen
          </span>
        </div>
      </div>

      {/* Drink or Food Category */}
      <div className="!overflow-x-auto mt-3">
        <DrinkCategory />
      </div>
      {/* Menu */}
      <div className="mt-5 !overflow-y-auto">
        <MenuItem />
      </div>
      {/* Bottom Navbar */}
      <div className="fixed w-screen bottom-0 right-0 left-0">
        <BottomBar />
      </div>
    </div>
  );
};

export default index;
