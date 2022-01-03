import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes, onlyPublicRoutes, publicRoutes } from "../routes";

const AppRouter = ({ user }) => {
  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map((route) => {
          return <Route key={route.path} path={route.path} element={route.Component} />;
        })}

      {!user.isAuth &&
        onlyPublicRoutes.map((route) => {
          return <Route key={route.path} path={route.path} element={route.Component} />;
        })}

      {publicRoutes.map((route) => {
        return <Route key={route.path} path={route.path} element={route.Component} />;
      })}

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;
