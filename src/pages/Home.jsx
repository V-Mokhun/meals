import { Box, Container } from "@mui/material";
import React from "react";
import Search from "../components/Search";
import Sidebar from "../components/Sidebar";
import Meals from "../components/Meals";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <Search />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Sidebar />
        <Meals />
      </Box>
    </Container>
  );
};

export default Home;
