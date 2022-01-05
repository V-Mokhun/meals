import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { MEAL_ROUTE } from "../constants/routes";

const MealsItem = ({ meal }) => {
  return (
    <Card sx={{ mr: 3, mb: 4, flex: "0 1 calc(33.333% - 24px)" }}>
      <Link
        style={{ color: "inherit", height: "100%", display: "block" }}
        to={`${MEAL_ROUTE}/${meal.id}`}
      >
        <CardActionArea
          sx={{
            height: "100%",
            justifyContent: "flex-start",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardMedia
            sx={{ maxHeight: "200px", height: "100%" }}
            component="img"
            image={meal.image}
            alt={`${meal.title}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: "center" }}>
              {meal.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default MealsItem;
