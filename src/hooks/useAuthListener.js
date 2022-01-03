import { useContext, useEffect } from "react";
import { FirebaseContext } from "../context/firebase";
import { StoreContext } from "../context/store";

const useAuthListener = () => {
  const { user } = useContext(StoreContext);
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("user", JSON.stringify(authUser));
        user.setUser(authUser);
        user.setIsAuth(true);
      } else {
        localStorage.removeItem("user");
        user.setUser({});
        user.setIsAuth(false);
      }
    });

    return () => listener();
  }, []);

  return user;
};

export default useAuthListener;
