import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMealById, fetchSimilarMealsById } from "../api/meal";
import MealContent from "../components/MealContent";

const Meal = () => {
  const [meal, setMeal] = useState({});
  const [similarMeals, setSimilarMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const setMealData = async () => {
      setLoading(true);
      try {
        const mealResult = await fetchMealById(id);
        const similarMealsResult = await fetchSimilarMealsById(id);

        setSimilarMeals(similarMealsResult);
        setMeal(mealResult);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    if (id) {
      setMealData();
    }
  }, [id]);

  return <MealContent loading={loading} error={error} meal={meal} similarMeals={similarMeals} />;
};

export default Meal;
