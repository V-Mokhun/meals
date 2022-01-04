import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { HOME_ROUTE } from "../constants/routes";

export const IsUserRedirect = ({ isAuth, loggedInPath, children }) => {
  if (isAuth) {
    return <Navigate to={loggedInPath} />;
  }

  return children;
};

export const ProtectedRoute = ({ isAuth, children }) => {
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to={HOME_ROUTE} state={{ from: location }} />;
  }

  return children;
};
