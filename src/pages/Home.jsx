import { Box, Container } from "@mui/material";
import React, { useState } from "react";
import Search from "../components/Search";
import Sidebar from "../components/Sidebar";
import Meals from "../components/Meals";

const Home = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Container maxWidth="xl">
      <Search setLoading={setLoading} />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Sidebar />
        <Meals loading={loading} />
      </Box>
    </Container>
  );
};

export default Home;
