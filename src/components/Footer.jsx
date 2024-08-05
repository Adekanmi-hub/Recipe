import {
  Box,
  Button,
  Flex,
  Input,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { ImLocation2 } from "react-icons/im";

const Footer = () => {
  return (
    <Flex pt="100px" pb="50px" px={24}>
      <Flex
        justify="space-between"
        w="100%"
        flexDir="column"
        alignItems="start"
      >
        <Flex
          w="100%"
          justify="space-between"
          pb={8}
          borderBottom="2px solid  #5B2E1A"
        >
          <Flex flexDir="column">
            <Text
              fontSize={{ "2xl": "6xl", xl: "5xl", lg: "4xl", md: "24px" }}
              fontWeight="700"
              cursor="pointer"
              fontFamily="Merienda, cursive"
            >
              Recipe Hub
            </Text>
            <Text
              fontWeight={{ "2xl": "700", xl: "600", lg: "400", md: "400" }}
            >
              ...masterpiece at it's peak
            </Text>
          </Flex>
          <Flex flexDir="column" gap={3}>
            <Text>COMPANY</Text>
            <List spacing={3}>
              <ListItem>About Us</ListItem>
              <ListItem>FAQS</ListItem>
            </List>
          </Flex>
          <Flex flexDir="column" gap={3}>
            <Text>HELP</Text>
            <List spacing={3}>
              <ListItem>Customer Support</ListItem>
              <ListItem>Terms & Conditions</ListItem>
              <ListItem>Privacy Policy</ListItem>
            </List>
          </Flex>
          <Flex flexDir="column" gap={3}>
            <Text>NEWSLETTER</Text>
            <Flex flexDir="column" gap={3}>
              <Input
                border="1px solid #5B2E1A"
                _hover={{ border: "1px solid #5B2E1A" }}
                placeholder="Enter your email"
              />
              <Button
                w="100%"
                bgColor="#5B2E1A"
                color="white"
                _hover={{
                  bgColor: "white",
                  color: "#5B2E1A",
                  border: "2px solid #5B2E1A",
                }}
              >
                Subscribe Now
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          w={{ "2xl": "35%", xl: "50%", lg: "80%" }}
          justify="space-between"
          pt={6}
        >
          <Flex gap={2}>
            <Box pt={1}>
              <FiPhone />
            </Box>
            <Text>+234 xxx xxx xxxx</Text>
          </Flex>
          <Flex gap={2}>
            <Box pt={1}>
              <ImLocation2 />
            </Box>
            <Text>123, xyz street, Lagos, Nigeria</Text>
          </Flex>
          <Flex gap={2}>
            <Box pt={1}>
              <FiMail />
            </Box>
            <Text>info@recipehub.com</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
