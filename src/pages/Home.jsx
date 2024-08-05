import { Flex } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <Flex w="100vw" bgColor="wheat" flexDir="column">
      <Navbar />
      <Outlet />
    </Flex>
  );
};

export default Home;
