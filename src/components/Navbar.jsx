import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Flex
      w="100%"
      justify="space-between"
      bgColor="white"
      position="fixed"
      px={{ "2xl": "24", xl: "16", lg: "8", md: "8", sm: "10%" }}
      py={4}
      zIndex={2}
    >
      <Flex w="50%" fontSize="24px" fontWeight={700}>
        <Text fontFamily="Merienda, cursive" as={"a"} href="/home">
          Recipe Hub
        </Text>
      </Flex>
      <Flex
        w={{ "2xl": "30%", xl: "40%", lg: "50%", md: "60%", sm: "80%" }}
        justify="space-around"
        pt={2}
      >
        <Text
          _hover={{ borderBottom: "2px solid black" }}
          cursor="pointer"
          fontSize="18px"
          fontFamily="Merienda, cursive"
          fontWeight={500}
          as={"a"}
          href="/home/recipe"
        >
          Recipe
        </Text>
        <Text
          _hover={{ borderBottom: "2px solid black" }}
          cursor="pointer"
          fontSize="18px"
          fontFamily="Merienda, cursive"
          fontWeight={500}
          as={"a"}
          href="/home/categories"
        >
          Categories
        </Text>
        <Text
          _hover={{ borderBottom: "2px solid black" }}
          cursor="pointer"
          fontSize="18px"
          fontFamily="Merienda, cursive"
          fontWeight={500}
        >
          About Us
        </Text>
        <Text
          _hover={{ borderBottom: "2px solid black" }}
          cursor="pointer"
          fontSize="18px"
          fontFamily="Merienda, cursive"
          fontWeight={500}
        >
          contact Us
        </Text>
      </Flex>
    </Flex>
  );
};

export default Navbar;
