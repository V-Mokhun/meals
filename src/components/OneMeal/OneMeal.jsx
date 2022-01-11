/* eslint-disable dot-notation */
import { Box } from "@mui/material";
import { observer } from "mobx-react-lite";
import React, { useCallback, useContext } from "react";
import { StoreContext } from "../../context/store";
import OneMealDirections from "./OneMealDirections";
import OneMealHeader from "./OneMealHeader";
import OneMealIngredients from "./OneMealIngredients";
import OneMealTags from "./OneMealTags";

const OneMeal = observer(({ meal }) => {
  const { user } = useContext(StoreContext);
  const { isMealInFavoriteMeals } = user;

  const handleAddFavoriteMeal = useCallback(
    (favoriteMeal) => {
      user.addFavoriteMeal(favoriteMeal);
      localStorage.setItem("favorite-meals", JSON.stringify(user.favoriteMeals));
    },
    [user]
  );

  const handleRemoveFavoriteMeal = useCallback(
    (id) => {
      user.removeFavoriteMeal(id);
      localStorage.setItem("favorite-meals", JSON.stringify(user.favoriteMeals));
    },
    [user]
  );

  return (
    meal && (
      <Box>
        <OneMealHeader
          meal={meal}
          isMealInFavoriteMeals={isMealInFavoriteMeals}
          handleAddFavoriteMeal={handleAddFavoriteMeal}
          handleRemoveFavoriteMeal={handleRemoveFavoriteMeal}
        />
        <OneMealIngredients
          servings={meal.servings}
          extendedIngredients={meal.extendedIngredients}
        />
        <OneMealDirections analyzedInstructions={meal.analyzedInstructions} />
        <OneMealTags meal={meal} />
      </Box>
    )
  );
});

export default OneMeal;
