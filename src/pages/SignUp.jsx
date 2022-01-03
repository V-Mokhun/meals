import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormHelperText from "@mui/material/FormHelperText";
import { HOME_ROUTE, LOG_IN_ROUTE } from "../constants/routes";
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

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        maxWidth: 600,
        margin: "0 auto",
        height: "100%",
      }}
      onSubmit={handleSignUp}
    >
      {error && (
        <FormHelperText margin="0 0 20px 0" error>
          {error}
        </FormHelperText>
      )}
      <TextField
        label="First name"
        variant="filled"
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Button size="large" disabled={isInvalid} type="submit" variant="contained" color="primary">
          Sign up
        </Button>
        <Typography>
          Have an account?{" "}
          <Link style={{ color: "#1976d2" }} to={LOG_IN_ROUTE}>
            Log in now!
          </Link>
        </Typography>
      </Box>
    </form>
  );
};

export default SignUp;
