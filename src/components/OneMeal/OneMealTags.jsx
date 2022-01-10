/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

const TAGS = [
  {
    propName: "veryPopular",
    showName: "Very Popular",
  },
  {
    propName: "veryHealthy",
    showName: "Very Healthy",
  },
  {
    propName: "cheap",
    showName: "Cheap",
  },
  {
    propName: "dairyFree",
    showName: "Dairy Free",
  },
  {
    propName: "glutenFree",
    showName: "Gluten Free",
  },
  {
    propName: "vegeterian",
    showName: "Vegeterian",
  },
];

const OneMealTags = ({ meal }) => {
  return (
    <Box>
      <Typography sx={{ mb: 2 }} variant="h4" component="h5">
        Recipe tags
      </Typography>
      <List sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", mb: 3 }}>
        {TAGS.map((tag) => {
          if (meal[tag.propName]) {
            return (
              <ListItem
                sx={{
                  py: 0.5,
                  px: 2,
                  borderRadius: 10,
                  color: "#3a9691",
                  border: "2px solid #3a9691",
                  mr: 2,
                  mb: 2,
                  width: "auto",
                }}
              >
                <ListItemText primary={`${tag.showName}`} />
              </ListItem>
            );
          }
        })}
        {meal.dishTypes &&
          meal.dishTypes.length > 0 &&
          meal.dishTypes.map((type) => (
            <ListItem
              sx={{
                py: 0.5,
                px: 2,
                borderRadius: 10,
                color: "#3a9691",
                border: "2px solid #3a9691",
                mr: 2,
                mb: 2,
                width: "auto",
              }}
            >
              <ListItemText primary={`${type[0].toUpperCase()}${type.slice(1)}`} />
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default OneMealTags;
