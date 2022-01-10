import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { authRoutes, onlyPublicRoutes, publicRoutes } from "./routes";
import Header from "./components/Header";
import useAuthListener from "./hooks/useAuthListener";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { HOME_ROUTE } from "./constants/routes";
import { StoreContext } from "./context/store";

const App = observer(() => {
  useAuthListener();
  const { user, meal } = useContext(StoreContext);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      user.setUser(JSON.parse(localStorage.getItem("user")));
      user.setIsAuth(true);
    }

    if (localStorage.getItem("last-query")) {
      user.setLastQuery(localStorage.getItem("last-query"));
    }

    if (localStorage.getItem("meal")) {
      const { meals, totalCount, numberOfMeals, offset } = JSON.parse(localStorage.getItem("meal"));
      meal.setMeals(meals);
      meal.setTotalCount(totalCount);
      meal.setNumberOfMeals(numberOfMeals);
      meal.setOffset(offset);
    }

    if (localStorage.getItem("favorite-meals")) {
      user.setFavoriteMeals(JSON.parse(localStorage.getItem("favorite-meals")));
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <main className="main" style={{ paddingBottom: 30 }}>
          <Routes>
            {authRoutes.map((route) => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<ProtectedRoute isAuth={user.isAuth}>{route.Component}</ProtectedRoute>}
                />
              );
            })}

            {onlyPublicRoutes.map((route) => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    <IsUserRedirect isAuth={user.isAuth} loggedInPath={HOME_ROUTE}>
                      {route.Component}
                    </IsUserRedirect>
                  }
                />
              );
            })}

            {publicRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.Component} />
            ))}

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
});

export default App;
