import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../constants/routes";
import { FirebaseContext } from "../context/firebase";
import { validateEmail } from "../helpers";

const SignUp = () => {
  const navigate = useNavigate();
  const firebase = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = !firstName.trim() || !password.trim() || !validateEmail(email);

  const handleSignUp = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({
          displayName: firstName,
        });
      })
      .then(() => {
        navigate(HOME_ROUTE);
      })
      .catch((err) => {
        setFirstName("");
        setEmail("");
        setPassword("");
        setError(err.message);
      });
  };

  return <div>Sign up</div>;
};

export default SignUp;
