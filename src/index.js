import React, { useMemo } from "react";
import { render } from "react-dom";
import App from "./App";
import { FirebaseContext } from "./context/firebase";
import { StoreContext } from "./context/store";
import UserStore from "./store/UserStore";
import firebase from "./lib/firebase";

const user = new UserStore();
const ContextProvider = ({ children }) => {
  const storeContextValue = useMemo(() => ({ user }), []);

  return (
    <FirebaseContext.Provider value={firebase}>
      <StoreContext.Provider value={storeContextValue}>{children}</StoreContext.Provider>
    </FirebaseContext.Provider>
  );
};

render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
