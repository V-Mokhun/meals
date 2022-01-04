import { Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import MealsItem from "./MealsItem";

const MealsList = observer(({ meal }) => {
  return meal.meals.length > 0 ? (
    meal.meals.map((mealItem) => <MealsItem key={mealItem.title} meal={mealItem} />)
  ) : (
    <Typography variant="h3">Search for your meals!</Typography>
  );
});

export default MealsList;
