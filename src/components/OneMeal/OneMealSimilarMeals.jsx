import { Box, Typography } from "@mui/material";
import React from "react";
import MealsItem from "../Meals/MealsItem";

const OneMealSimilarMeals = ({ similarMeals }) => {
  return (
    <Box>
      <Typography sx={{ mb: 2 }} variant="h4" component="h5">
        Similar meals:
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          mb: 3,
        }}
      >
        {similarMeals &&
          similarMeals.length > 0 &&
          similarMeals.map((similarMeal) => <MealsItem key={similarMeal.id} meal={similarMeal} />)}
      </Box>
    </Box>
  );
};

export default OneMealSimilarMeals;
