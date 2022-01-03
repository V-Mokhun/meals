import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { StoreContext } from "../context/store";
import { authRoutes, onlyPublicRoutes, publicRoutes } from "../routes";

const AppRouter = observer(() => {
  const { user } = useContext(StoreContext);

  return (
    <Routes>
      {user.isAuth
        ? authRoutes.map((route) => {
            return <Route key={route.path} path={route.path} element={route.Component} />;
          })
        : onlyPublicRoutes.map((route) => {
            return <Route key={route.path} path={route.path} element={route.Component} />;
          })}

      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.Component} />
      ))}

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
});

export default AppRouter;
