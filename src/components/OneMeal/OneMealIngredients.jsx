import { Box, Button, List, ListItem, ListItemText, Typography } from "@mui/material";
import React, { useState } from "react";

const OneMealIngredients = ({ servings, extendedIngredients }) => {
  const [measure, setMeasure] = useState("us");

  return (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography variant="h4" component="h5">
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
          {servings && <Typography variant="body1">{servings} Servings</Typography>}
        </Box>
      </Box>
      <List
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {extendedIngredients &&
          extendedIngredients.length > 0 &&
          extendedIngredients.map((ingr) => (
            <ListItem
              disablePadding
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "auto",
                mr: 2,
                mb: 3,
                flex: "0 1 calc(20% - 16px)",
              }}
              key={`${ingr.id}-${ingr.original}`}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: "1 1 auto",
                }}
              >
                <img
                  src={`https://spoonacular.com/cdn/ingredients_100x100/${ingr.image}`}
                  alt={ingr.name}
                  style={{ maxWidth: 100, maxHeight: 100, objectFit: "cover" }}
                />
              </Box>
              <ListItemText
                disableTypography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  flexWrap: "wrap",
                  mt: 1,
                  flex: "0 0 auto",
                }}
              >
                <Typography component="span" variant="body1" sx={{ mr: 0.5 }}>
                  {`${
                    ingr.measures[measure].amount > 100
                      ? Math.floor(ingr.measures[measure].amount)
                      : ingr.measures[measure].amount
                  } ${ingr.measures[measure].unitLong}`}
                </Typography>
                <Typography component="span" variant="body1" sx={{ fontWeight: 700 }}>
                  {ingr.name}
                </Typography>
                {ingr.meta.length > 0 && (
                  <Typography
                    component="p"
                    variant="body2"
                    sx={{ opacity: 0.5, width: "100%", textAlign: "center" }}
                  >
                    ({" "}
                    {ingr.meta.map(
                      (item, i) => `${ingr.meta.length - 1 === i ? `${item}` : `${item}, `}`
                    )}{" "}
                    )
                  </Typography>
                )}
              </ListItemText>
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default OneMealIngredients;
