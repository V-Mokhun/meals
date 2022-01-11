import React, { useEffect, useState } from "react";
import { fetchRandomMeal, fetchSimilarMealsById } from "../api/meal";
import MealContent from "../components/MealContent";

const Random = () => {
  const [meal, setMeal] = useState({});
  const [similarMeals, setSimilarMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const setMealData = async () => {
      setLoading(true);
      try {
        const {
          recipes: [mealResult],
        } = await fetchRandomMeal();
        const similarMealsResult = await fetchSimilarMealsById(mealResult.id);

        setSimilarMeals(similarMealsResult);
        setMeal(mealResult);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    setMealData();
  }, []);

  return <MealContent loading={loading} error={error} meal={meal} similarMeals={similarMeals} />;
};

export default Random;
