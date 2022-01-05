import { Box, Container } from "@mui/material";
import { observer } from "mobx-react-lite";
import React, { useCallback, useContext, useState } from "react";
import { getMealsByQuery } from "../api/meal";
import Meals from "../components/Meals";
import Search from "../components/Search";
import Sidebar from "../components/Sidebar";
import { StoreContext } from "../context/store";

const Home = observer(() => {
  const { meal, user } = useContext(StoreContext);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchSubmit = useCallback(
    async (setError) => {
      const result = await getMealsByQuery(searchValue);
      if (result.results.length > 0) {
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

        setError("");
      } else {
        setError("Could not find your meals. Try again!");
      }
    },
    [searchValue]
  );

  return (
    <Container maxWidth="xl">
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setLoading={setLoading}
        handleSearchSubmit={handleSearchSubmit}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Sidebar setLoading={setLoading} />
        <Meals loading={loading} />
      </Box>
    </Container>
  );
});

export default Home;
