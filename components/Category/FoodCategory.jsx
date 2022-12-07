const FoodCategory = () => {
  return (
    <div className="flex  justify-start gap-x-5 mx-4 gap-y-5 items-center">
      <span className="bg-primary hover:bg-third hover:text-white text-black px-4 py-2 w-max rounded-2xl">
        Fruhstuck
      </span>
      <span className="bg-primary hover:bg-third hover:text-white text-black px-4 py-2 w-max rounded-2xl">
        Fast Food
      </span>
      <span className="bg-primary hover:bg-third hover:text-white text-black px-4 py-2 w-max rounded-2xl">
        Pasta
      </span>
      <span className="bg-primary hover:bg-third hover:text-white text-black px-4 py-2 w-max rounded-2xl">
        Salat
      </span>
      <span className="bg-primary hover:bg-third hover:text-white text-black px-4 py-2 w-max rounded-2xl">
        Dessert
      </span>
    </div>
  );
};

export default FoodCategory;
