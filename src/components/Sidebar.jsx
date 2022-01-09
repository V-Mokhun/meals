/* eslint-disable no-nested-ternary */
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useMemo } from "react";
import { getMealsByQuery } from "../api/meal";
import { StoreContext } from "../context/store";
import useDebounce from "../hooks/useDebounce";
import { CUISINE_OPTIONS, SORT_OPTIONS, TYPE_OPTIONS } from "../store/MealStore";

const Sidebar = observer(({ selectedOptions, setSelectedOptions, setLoading }) => {
  const { meal, user } = useContext(StoreContext);

  const SELECT_ITEMS = useMemo(
    () => [
      {
        label: "Sort by:",
        id: "sort",
        value: "sortOption",
      },
      {
        label: "Cuisine:",
        id: "cuisine",
        value: "cuisine",
      },
      {
        label: "Type:",
        id: "type",
        value: "type",
      },
    ],
    []
  );

  const setMealsByOptions = async () => {
    setLoading(true);
    let result;

    if (
      selectedOptions.cuisine.toLowerCase() !== "all" ||
      selectedOptions.type.toLowerCase() !== "all"
    ) {
      result = await getMealsByQuery(null, meal.offset, selectedOptions);
    } else {
      result = await getMealsByQuery(user.lastQuery, meal.offset, selectedOptions);
    }

    meal.setMeals(result.results);
    meal.setNumberOfMeals(result.number);
    meal.setTotalCount(result.totalResults);
    meal.setOffset(result.offset);
    setLoading(false);
  };

  useDebounce(
    () => {
      setMealsByOptions();
    },
    1500,
    [selectedOptions.numberOfMeals]
  );

  useEffect(() => {
    setMealsByOptions();
  }, [selectedOptions.sortOption, selectedOptions.cuisine, selectedOptions.type]);

  return (
    <Box sx={{ flex: "0 0 300px", mr: 3 }}>
      <FormControl sx={{ mb: 2 }} fullWidth>
        <TextField
          inputProps={{ min: 5, max: 50 }}
          label="Number of Meals"
          type="number"
          value={+selectedOptions.numberOfMeals}
          onChange={(e) => {
            setSelectedOptions((prev) => ({ ...prev, numberOfMeals: +e.target.value }));
          }}
        />
      </FormControl>
      {SELECT_ITEMS.map(({ id, label, value }) => (
        <FormControl key={id} sx={{ mb: 2 }} fullWidth>
          <InputLabel id={`${id}-label`}>{label}</InputLabel>
          <Select
            labelId={`${id}-label`}
            id={id}
            label={label}
            value={selectedOptions[value]}
            onChange={(e) => {
              setSelectedOptions((prev) => ({ ...prev, [value]: e.target.value }));
            }}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 300,
                },
              },
            }}
          >
            {id === "sort"
              ? SORT_OPTIONS.map((item) => (
                  <MenuItem key={item} value={item.toLowerCase()}>
                    {`${item[0]}${item.slice(1).toLowerCase()}`}
                  </MenuItem>
                ))
              : id === "cuisine"
              ? CUISINE_OPTIONS.map((item) => (
                  <MenuItem key={item} value={`${item[0]}${item.slice(1).toLowerCase()}`}>
                    {`${item[0]}${item.slice(1).toLowerCase()}`}
                  </MenuItem>
                ))
              : TYPE_OPTIONS.map((item) => (
                  <MenuItem key={item} value={item.toLowerCase()}>
                    {`${item[0]}${item.slice(1).toLowerCase()}`}
                  </MenuItem>
                ))}
          </Select>
        </FormControl>
      ))}
    </Box>
  );
});

export default Sidebar;
