import { useEffect, useState } from "react";
import MealItem from "./MealItem";

const Meals = () => {
  const [loadMeals, setLoadMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch("http://localhost:5000/meals");

      if (!response.ok) {
        //
      }

      const meals = await response.json();

      setLoadMeals(meals);
    };

    fetchMeals();
  }, []);

  return (
    <ul className="w-[90%] max-w-[70rem] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {loadMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
