import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
import Typography from "@mui/material/Typography";
import { HOME_ROUTE, SIGN_UP_ROUTE } from "../constants/routes";
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
      onSubmit={handleLogIn}
    >
      {error && (
        <FormHelperText sx={{ mb: 2 }} error>
          {error}
        </FormHelperText>
      )}
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
          Log In
        </Button>
        <Typography>
          Don`t have an account?{" "}
          <Link style={{ color: "#1976d2" }} to={SIGN_UP_ROUTE}>
            Sign up now!
          </Link>
        </Typography>
      </Box>
    </form>
  );
};

export default LogIn;
