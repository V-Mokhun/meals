import { useContext, useEffect } from "react";
import { FirebaseContext } from "../context/firebase";
import { StoreContext } from "../context/store";

const useAuthListener = () => {
  const { user } = useContext(StoreContext);
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        user.setIsAuth(true);
        user.setUser(authUser);
        localStorage.setItem("user", JSON.stringify(authUser));
      } else {
        user.setIsAuth(false);
        user.setUser({});
        localStorage.removeItem("user");
      }
    });

    return () => listener();
  }, [firebase, user]);

  return user;
};

export default useAuthListener;
