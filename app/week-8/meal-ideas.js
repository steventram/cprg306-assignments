"use client";
import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals;
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    try {
      const mealIdeas = await fetchMealIdeas(ingredient);
      setMeals(mealIdeas);
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="flex flex-col items-center text-center text-black bg-rose-300 p-2 rounded-md m-2 border-2 border-black">
      {ingredient === "" ? (
        <h2 className="text-xl font-bold">Meal Ideas</h2>
      ) : (
        <h2 className="text-xl font-bold">Meal Ideas for {ingredient}</h2>
      )}
      {ingredient === "" ? (
        <p>Select an ingredient to see meal ideas</p>
      ) : (
        <>
          {meals == null ? (
            <p>No meals found with {ingredient}</p>
          ) : (
            <ul className="flex flex-col items-center p-2 underline">
              {meals.map((meal, index) => (
                <li key={index}>{meal.strMeal}</li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
