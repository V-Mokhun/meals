import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import KitchenIcon from "@mui/icons-material/Kitchen";
import StarIcon from "@mui/icons-material/Star";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Box, Button, Grid, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";

const OneMealHeader = observer(
  ({ meal, isMealInFavoriteMeals, handleAddFavoriteMeal, handleRemoveFavoriteMeal }) => {
    return (
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #e3e3e3",
          pb: 5,
          mb: 3,
        }}
      >
        <Grid item xs={6}>
          <Typography style={{ textAlign: "center", marginBottom: 30 }} variant="h3" component="h1">
            {meal.title}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", mb: 4 }}>
            {meal.aggregateLikes ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mr: 2,
                  pr: 2,
                  borderRight: "1px solid #4a4a4a",
                  flex: "1 1 auto",
                }}
              >
                <Typography variant="h4" component="p">
                  {meal.aggregateLikes}
                </Typography>
                <ThumbUpIcon />
              </Box>
            ) : null}
            {meal.extendedIngredients?.length > 0 ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mr: 2,
                  pr: 2,
                  borderRight: "1px solid #4a4a4a",
                  flex: "1 1 auto",
                }}
              >
                <Typography variant="h4" component="p">
                  {meal.extendedIngredients.length}
                </Typography>
                <KitchenIcon />
              </Box>
            ) : null}
            {meal.readyInMinutes ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mr: 2,
                  pr: 2,
                  borderRight: "1px solid #4a4a4a",
                  flex: "1 1 auto",
                }}
              >
                <Typography variant="h4" component="p">
                  {meal.readyInMinutes}
                </Typography>
                <AccessTimeIcon />
              </Box>
            ) : null}
            {meal.pricePerServing ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flex: "1 1 auto",
                }}
              >
                <Typography variant="h4" component="p">
                  {meal.pricePerServing.toFixed(0)} / 1
                </Typography>
                <AttachMoneyIcon />
              </Box>
            ) : null}
          </Box>
          <Button
            onClick={() => {
              if (isMealInFavoriteMeals(meal.id)) {
                handleRemoveFavoriteMeal(meal.id);
              } else {
                const { id, image, title, aggregateLikes } = meal;

                const favoriteMeal = {
                  id,
                  image,
                  title,
                  aggregateLikes,
                };

                handleAddFavoriteMeal(favoriteMeal);
              }
            }}
            endIcon={<StarIcon />}
            variant="contained"
          >
            {isMealInFavoriteMeals(meal.id) ? "Remove from favorites" : "Add to favorites"}
          </Button>
        </Grid>
        <Grid item xs={6}>
          {meal.image && (
            <img
              style={{ borderRadius: 10, maxWidth: "100%", height: "auto" }}
              src={meal.image}
              alt={meal.title}
            />
          )}
        </Grid>
      </Grid>
    );
  }
);

export default OneMealHeader;
