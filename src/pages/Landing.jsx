import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import Create from "../components/Create";
import Catalog from "../components/Catalog";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <Box>
      <Header />
      <Create />
      <Catalog />
      <Footer />
    </Box>
  );
};

export default Landing;
