import React from "react";
import Campaign from "../../components/Campaign/Campaign";
import DrinkCategory from "../../components/Category/DrinkCategory";
import FoodCategory from "../../components/Category/FoodCategory";
import RestaurantName from "../../components/Title/RestaurantName";
import BottomBar from "../../components/Widgets/BottomBar";
import Deals from "../../components/Widgets/Deals";
import StarWeek from "../../components/Widgets/StarWeek";
import TableNumber from "../../components/Widgets/TableNumber";
import ViewAll from "../../components/Widgets/ViewAll";

const index = () => {
  return (
    <div className="flex h-screen bg-fourth flex-col justify-between">
      {/* Header */}
      <div>
        <div className="flex justify-between h-min mx-4">
          <RestaurantName />
          <TableNumber />
        </div>
      </div>
      {/* Campaign */}
      <div>
        <Campaign />
      </div>
      {/* Recommend */}
      <div>
        <div className="flex flex-col gap-y-2">
          <span className="text-xl font-headFont ml-5">Empfehlung</span>
          <div className="flex gap-x-2 justify-center">
            <StarWeek />
            <Deals />
          </div>
        </div>
      </div>
      {/* Drinks */}
      <div className="flex flex-col gap-y-2">
        <div className="flex justify-between">
          <span className="text-xl font-headFont ml-5">Getranke</span>
          <ViewAll />
        </div>
        <div className="flex !overflow-y-auto ">
          <DrinkCategory />
        </div>
      </div>
      {/* Food */}
      <div className="flex flex-col gap-y-2">
        <div className="flex justify-between">
          <span className="text-xl font-headFont ml-5">Essen</span>
          <ViewAll />
        </div>
        <div className="flex !overflow-x-auto">
          <FoodCategory />
        </div>
      </div>
      {/* Bottom Navbar */}
      <div>
        <BottomBar />
      </div>
    </div>
  );
};

export default index;
