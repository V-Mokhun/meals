import React from "react";
import {
  HOME_ROUTE,
  LOG_IN_ROUTE,
  MEAL_ROUTE,
  PROFILE_ROUTE,
  RANDOM_RECIPE_ROUTE,
  SIGN_UP_ROUTE,
} from "./constants/routes";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Meal from "./pages/Meal";
import Profile from "./pages/Profile";
import Random from "./pages/Random";
import SignUp from "./pages/SignUp";

export const authRoutes = [
  {
    path: PROFILE_ROUTE,
    Component: <Profile />,
  },
];

export const onlyPublicRoutes = [
  {
    path: LOG_IN_ROUTE,
    Component: <LogIn />,
  },
  {
    path: SIGN_UP_ROUTE,
    Component: <SignUp />,
  },
];

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: <Home />,
  },
  {
    path: RANDOM_RECIPE_ROUTE,
    Component: <Random />,
  },
  {
    path: `${MEAL_ROUTE}/:id`,
    Component: <Meal />,
  },
];
