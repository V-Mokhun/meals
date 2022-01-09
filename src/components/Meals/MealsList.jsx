import { Box, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import MealsItem from "./MealsItem";

const MealsList = observer(({ meal }) => {
  return meal.meals?.length > 0 ? (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        mb: 3,
      }}
    >
      {meal.meals.map((mealItem) => (
        <MealsItem key={mealItem.title} meal={mealItem} />
      ))}
    </Box>
  ) : (
    <Typography variant="h3">Search for your meals!</Typography>
  );
});

export default MealsList;
