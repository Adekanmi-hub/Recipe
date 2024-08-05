import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export const Header = () => {
  return (
    <Flex mt="100px" w="100%" position="relative" h="92vh">
      <Flex>
        <Image
          src="/assets/chef_One.jpg"
          w={{ "2xl": "550px", xl: "380px", lg: "350px", md: "300px" }}
          height={{ "2xl": "750px", xl: "500px", lg: "450px", md: "400px" }}
          borderRadius="10px"
          alt="header"
          position="absolute"
          right={{ "2xl": "550px", xl: "430px", lg: "230px", md: "100px" }}
          top={{ "2xl": "180px", xl: "150px", lg: "150px", md: "100px" }}
          zIndex={1}
        />
        <Image
          src="/assets/orange.jpg"
          w={{ "2xl": "400px", xl: "380px", lg: "300px", md: "300px" }}
          height={{ "2xl": "650px", xl: "500px", lg: "400px", md: "400px" }}
          borderRadius="10px"
          alt="orange"
          position="absolute"
          right={{ "2xl": "1000px", xl: "720px", lg: "500px", md: "100px" }}
          top={{ "2xl": "90px", xl: "70px", lg: "100px", md: "100px" }}
        />
        <Image
          src="/assets/cupcake.jpg"
          w={{ "2xl": "400px", xl: "380px", lg: "300px", md: "300px" }}
          height={{ "2xl": "650px", xl: "500px", lg: "400px", md: "400px" }}
          borderRadius="10px"
          alt="cupcake"
          position="absolute"
          right={{ "2xl": "250px", xl: "150px", lg: "60px", md: "100px" }}
          top={{ "2xl": "400px", xl: "250px", lg: "270px", md: "100px" }}
        />
      </Flex>
      <Flex
        w={{ "2xl": "600px", xl: "30%", lg: "30%", md: "70%" }}
        position="absolute"
        top={{ "2xl": "300px", xl: "250px", lg: "260px", md: "100px" }}
        left={{ "2xl": "378px", xl: "120px", lg: "80px", md: "100px" }}
        flexDir="column"
      >
        <Flex
          w="100%"
          px={4}
          py={{ "2xl": "10", xl: "25px", lg: "50px", md: "80px" }}
          flexDir="column"
          justify="center"
          bgColor="#00000"
          lineHeight={{ "2xl": "70px", xl: "1.2", lg: "1.5", md: "1.5" }}
          borderRadius="10px"
          boxShadow="4px 4px 25px 0px gray"
        >
          <Text
            fontSize={{ "2xl": "6xl", xl: "4xl", lg: "2xl", md: "24px" }}
            fontWeight={500}
            fontFamily="Merienda, cursive"
            color="#5B2E1A"
          >
            Share your
          </Text>
          <Text
            fontSize={{ "2xl": "6xl", xl: "4xl", lg: "2xl", md: "24px" }}
            fontWeight={400}
            fontFamily="Merienda, cursive"
            color="#5B2E1A"
          >
            recipes with the world.
          </Text>
        </Flex>
        <Flex mt={{ "2xl": "10", xl: "10px", lg: "10px", md: "10px" }}>
          <Text
            fontSize={{ "2xl": "18px", xl: "16px", lg: "12px", md: "24px" }}
            fontWeight={{ "2xl": "500", xl: "600", lg: "500", md: "400" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quod totam, soluta,
            autem natus rem voluptate est placeat sapiente tempora facilis minus
            sit earum voluptas reiciendis possimus sequi rerum? Ea, quos?
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
