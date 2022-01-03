import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../constants/routes";
import { FirebaseContext } from "../context/firebase";
import { validateEmail } from "../helpers";

const LogIn = () => {
  const navigate = useNavigate();
  const firebase = useContext(FirebaseContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = !password.trim() || !validateEmail(email);

  const handleLogIn = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigate(HOME_ROUTE);
      })
      .catch((err) => {
        setEmail("");
        setPassword("");
        setError(err.message);
      });
  };

  return <div>Login</div>;
};

export default LogIn;
