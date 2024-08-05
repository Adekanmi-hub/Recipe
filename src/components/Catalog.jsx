import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Catalog = () => {
  return (
    <Flex
      w="100%"
      bgColor="#5B2E1A"
      p={{ "2xl": "24", xl: "24", lg: "20" }}
      flexDir="column"
      gap={10}
    >
      <Flex>
        <Text
          fontSize={{ "2xl": "5xl", xl: "4xl", lg: "2xl", md: "24px" }}
          color="white"
          fontWeight={600}
          fontFamily="Merienda, cursive"
        >
          Share Unforgetable Memories
        </Text>
      </Flex>
      <Flex w="100%" justify="space-around" flexDir="row">
        <Flex>
          <Image
            src="/assets/child_cooking.jpg"
            borderRadius="10px"
            w={{ "2xl": "600px", xl: "380px", lg: "270px", md: "300px" }}
            h={{ "2xl": "850px", xl: "550px", lg: "350px", md: "300px" }}
            alt="cooking"
          />
        </Flex>
        <Flex pt={20}>
          <Image
            src="/assets/sprinkle.jpg"
            borderRadius="10px"
            w={{ "2xl": "600px", xl: "380px", lg: "270px", md: "300px" }}
            h={{ "2xl": "850px", xl: "550px", lg: "350px", md: "300px" }}
            alt="cooking"
          />
        </Flex>
        <Flex pt={40}>
          <Image
            src="/assets/platter.jpg"
            borderRadius="10px"
            w={{ "2xl": "600px", xl: "380px", lg: "270px", md: "300px" }}
            h={{ "2xl": "850px", xl: "550px", lg: "350px", md: "300px" }}
            alt="cooking"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Catalog;
