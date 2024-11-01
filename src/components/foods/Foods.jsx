import { useEffect, useState } from "react";
import Food from "../Food/Food";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("/foods.json")
      .then((response) => response.json())
      .then((data) => setFoods(data));
  }, []);

  return (
    <div>
      <h3 className="text-3xl font-bold text-center my-5 md:my-8">
        Show Our Service
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {foods.map((food) => (
          <Food key={food.id} food={food}></Food>
        ))}
      </div>
    </div>
  );
};

export default Foods;
