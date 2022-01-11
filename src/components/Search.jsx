import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, FormHelperText, TextField } from "@mui/material";
import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { getMealsByQuery } from "../api/meal";
import { StoreContext } from "../context/store";

const Search = observer(({ setLoading, handleSearchSubmit }) => {
  const { meal, user } = useContext(StoreContext);
  const [error, setError] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchValue.trim()) return;

    setLoading(true);

    handleSearchSubmit(searchValue, setError);

    setLoading(false);
    setSearchValue("");
  };

  useEffect(() => {
    const getMealsWithOffset = async () => {
      setLoading(true);
      const result = await getMealsByQuery(user.lastQuery, meal.offset);
      meal.setMeals(result.results);
      setLoading(false);
    };
    if (user.lastQuery) {
      getMealsWithOffset();
    }
  }, [user.lastQuery, meal.offset]);

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
      {error && <FormHelperText error>{error}</FormHelperText>}
    </form>
  );
});

export default Search;
