import { Box, Container, List, ListItem, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import FavoriteMeal from "../components/FavoriteMeal";
import { StoreContext } from "../context/store";

const Profile = observer(() => {
  const { user } = useContext(StoreContext);

  return (
    user && (
      <Container maxWidth="lg">
        <Typography sx={{ mb: 4 }} variant="h2" component="h1">
          Hello, {user.user.displayName}
        </Typography>
        <Box>
          <Typography sx={{ mb: 2 }} variant="h3" component="h2">
            {user.favoriteMeals.length > 0
              ? "Your favorite meals:"
              : "You don't have any favorite meals. Go add some!"}
          </Typography>
          <List>
            {user.favoriteMeals.length > 0 &&
              user.favoriteMeals.map((meal) => (
                <ListItem key={meal.id}>
                  <FavoriteMeal meal={meal} handleDelete={() => user.removeFavoriteMeal(meal.id)} />
                </ListItem>
              ))}
          </List>
        </Box>
      </Container>
    )
  );
});

export default Profile;
