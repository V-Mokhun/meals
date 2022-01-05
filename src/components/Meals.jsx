import { Box, CircularProgress } from "@mui/material";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { StoreContext } from "../context/store";
import MealsList from "./MealsList";
import Pagination from "./Pagination";

const Meals = observer(({ loading }) => {
  const { meal } = useContext(StoreContext);

  return (
    <>
      <Box sx={{ flexGrow: 1, display: `${loading ? "none" : "block"}` }}>
        <MealsList meal={meal} />
        <Pagination meal={meal} />
      </Box>
      <Box sx={{ flexGrow: 1, display: `${loading ? "flex" : "none"}`, justifyContent: "center" }}>
        <CircularProgress
          style={{ height: "auto", width: "100%" }}
          sx={{ maxWidth: 120, maxHeight: 120 }}
        />
      </Box>
    </>
  );
});

export default Meals;
