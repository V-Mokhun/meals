import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import KitchenIcon from "@mui/icons-material/Kitchen";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

const OneMeal = ({ meal }) => {
  const [measure, setMeasure] = useState("us");

  return (
    meal && (
      <Box>
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
          <Box sx={{ flexGrow: 1, mr: 4 }} item xs={6}>
            <Typography
              style={{ textAlign: "center", marginBottom: 30 }}
              variant="h2"
              component="h1"
            >
              {meal.title}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
              {meal.aggregateLikes && (
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
              )}
              {meal.extendedIngredients?.length > 0 && (
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
              )}
              {meal.readyInMinutes && (
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
              )}
              {meal.pricePerServing && (
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
              )}
            </Box>
          </Box>
          <Box item xs={6}>
            <img
              style={{ borderRadius: 10, maxWidth: "100%", height: "auto" }}
              src={meal.image}
              alt={meal.title}
            />
          </Box>
        </Grid>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h5" component="h6">
              Ingredients
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ display: "flex", alignItems: "center", mr: 3 }}>
                <Button
                  onClick={() => setMeasure("us")}
                  variant={`${measure === "us" ? "contained" : "outlined"}`}
                  sx={{ mr: 1 }}
                >
                  US
                </Button>
                <Button
                  onClick={() => setMeasure("metric")}
                  variant={`${measure === "metric" ? "contained" : "outlined"}`}
                >
                  Metric
                </Button>
              </Box>
              {meal.servings && <Typography variant="body1">{meal.servings} Servings</Typography>}
            </Box>
          </Box>
        </Box>
      </Box>
    )
  );
};

export default OneMeal;
