import { Box } from "@mui/material";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { StoreContext } from "../context/store";
import MealsList from "./MealsList";
import Pagination from "./Pagination";

const Meals = observer(() => {
  const { meal } = useContext(StoreContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MealsList meal={meal} />
      <Pagination meal={meal} />
    </Box>
  );
});

export default Meals;
