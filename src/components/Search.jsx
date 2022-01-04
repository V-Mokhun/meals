import React, { useContext, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { observer } from "mobx-react-lite";
import { Box, Button, TextField } from "@mui/material";
import { getMealsByQuery } from "../api/meal";
import { StoreContext } from "../context/store";

const Search = observer(() => {
  const { meal, user } = useContext(StoreContext);
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchValue.trim()) return;

    const result = await getMealsByQuery(searchValue);

    localStorage.setItem("last-query", searchValue);
    user.setLastQuery(searchValue);

    localStorage.setItem(
      "meal",
      JSON.stringify({
        meals: result.results,
        totalCount: result.totalResults,
        numberOfMeals: result.number,
        offset: result.offset,
      })
    );
    meal.setMeals(result.results);
    meal.setTotalCount(result.totalResults);
    meal.setNumberOfMeals(result.number);
    meal.setOffset(result.offset);

    setSearchValue("");
  };

  useEffect(() => {
    const getMealsWithOffset = async () => {
      const result = await getMealsByQuery(user.lastQuery, meal.offset);
      meal.setMeals(result.results);
    };
    if (user.lastQuery) {
      getMealsWithOffset();
    }
  }, [meal.offset]);

  return (
    <form style={{ paddingBottom: 30, width: "100%" }} onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <TextField
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          label="Search meal"
          variant="standard"
          sx={{ flexGrow: 1 }}
        />
        <Button type="submit" sx={{ ml: 1, p: 0.5, minWidth: 30 }}>
          <SearchIcon sx={{ color: "action.active" }} />
        </Button>
      </Box>
    </form>
  );
});

export default Search;