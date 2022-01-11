import DeleteIcon from "@mui/icons-material/Delete";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { MEAL_ROUTE } from "../constants/routes";

const FavoriteMeal = ({ meal, handleDelete }) => {
  return (
    <Card sx={{ width: "100%", pr: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link
          style={{
            color: "inherit",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flex: "1 1 auto",
          }}
          to={`${MEAL_ROUTE}/${meal.id}`}
        >
          <CardMedia
            sx={{ maxHeight: 200, maxWidth: 300, height: "100%" }}
            component="img"
            image={meal.image}
            alt={`${meal.title}`}
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              flex: "1 1 auto",
              mr: 2,
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {meal.title}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ThumbUpIcon />
              <Typography sx={{ ml: 1 }} variant="body1">
                {meal.aggregateLikes}
              </Typography>
            </Box>
          </CardContent>
        </Link>
        <Button variant="contained" endIcon={<DeleteIcon />} onClick={handleDelete}>
          Delete
        </Button>
      </Box>
    </Card>
  );
};

export default FavoriteMeal;
