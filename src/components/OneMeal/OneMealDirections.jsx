import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

const OneMealDirections = ({ analyzedInstructions }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography sx={{ mb: 2 }} variant="h4" component="h5">
        Directions
      </Typography>
      <List>
        {analyzedInstructions &&
          analyzedInstructions.length > 0 &&
          analyzedInstructions[0].steps.length > 0 &&
          analyzedInstructions[0].steps.map((step) => (
            <ListItem
              disablePadding
              key={step.number}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                mb: 2,
              }}
            >
              {step.number && (
                <Typography
                  sx={{ letterSpacing: 1, color: "#232323" }}
                  variant="body1"
                  component="p"
                >
                  STEP {step.number}
                </Typography>
              )}
              <ListItemText primary={step.step} />
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default OneMealDirections;
