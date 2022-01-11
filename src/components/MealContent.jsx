/* eslint-disable no-nested-ternary */
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import React from "react";
import OneMeal from "./OneMeal/OneMeal";
import OneMealSimilarMeals from "./OneMeal/OneMealSimilarMeals";

const MealContent = ({ loading, error, meal, similarMeals }) => {
  return loading ? (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <CircularProgress
        style={{ width: "100%", height: "auto" }}
        sx={{ maxWidth: 400, maxHeight: 400 }}
      />
    </Box>
  ) : error ? (
    <Typography sx={{ color: "red", textAlign: "center" }} variant="h2" component="h2">
      {error}
    </Typography>
  ) : (
    <Container maxWidth="lg">
      <OneMeal meal={meal} />
      <OneMealSimilarMeals similarMeals={similarMeals} />
    </Container>
  );
};

export default MealContent;
