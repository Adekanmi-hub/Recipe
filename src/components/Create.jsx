import React from "react";
import {
  Button,
  Flex,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { BsArrowRightCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const handleCreate = () => {
    navigate("/home/recipe");
  };
  return (
    <Flex
      bgColor="white"
      p={{ "2xl": "24", xl: "24", lg: "16" }}
      flexDir="row"
      justify="space-between"
    >
      <Flex pl={10}>
        <Image
          src="/assets/ingredient.jpg"
          borderRadius="10px"
          w={{ "2xl": "750px", xl: "500px", lg: "350px", md: "300px" }}
          h={{ "2xl": "850px", xl: "650px", lg: "500px", md: "300px" }}
          alt="cooking"
        />
      </Flex>
      <Flex
        flexDir="column"
        w="50%"
        pt={{ "2xl": "10", xl: "16", lg: "10" }}
        gap={4}
      >
        <Text
          color="#5B2E1A"
          fontSize={{ "2xl": "5xl", xl: "4xl", lg: "2xl", md: "24px" }}
          fontWeight={600}
          fontFamily="Merienda, cursive"
        >
          Create Your Signature Recipe
        </Text>
        <Text
          fontSize={{ "2xl": "22px", xl: "18px", lg: "14px" }}
          fontWeight={500}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          asperiores nihil repellendus praesent, labore minus assumenda facilis
          perferendis inventore? Sed repellendus minima nam a non sint quidem
          qui labore blanditiis.
        </Text>
        <List spacing={5}>
          <ListItem
            fontSize={{ "2xl": "20px", xl: "18px", lg: "14px", md: "24px" }}
            fontWeight={500}
          >
            <ListIcon
              as={MdCheckCircle}
              fontSize={{ "2xl": "24", xl: "22", lg: "18", md: "24" }}
              color="#5B2E1A"
            />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </ListItem>
          <ListItem
            fontSize={{ "2xl": "20px", xl: "18px", lg: "14px", md: "24px" }}
            fontWeight={500}
          >
            <ListIcon
              as={MdCheckCircle}
              fontSize={{ "2xl": "24", xl: "22", lg: "18", md: "24" }}
              color="#5B2E1A"
            />
            Assumenda, quia temporibus eveniet a libero incidunt suscipit
          </ListItem>
          <ListItem
            fontSize={{ "2xl": "20px", xl: "18px", lg: "14px", md: "24px" }}
            fontWeight={500}
          >
            <ListIcon
              as={MdCheckCircle}
              fontSize={{ "2xl": "24", xl: "22", lg: "18", md: "24" }}
              color="#5B2E1A"
            />
            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
          </ListItem>
          <ListItem
            fontSize={{ "2xl": "20px", xl: "18px", lg: "14px", md: "24px" }}
            fontWeight={500}
          >
            <ListIcon
              as={MdCheckCircle}
              fontSize={{ "2xl": "24", xl: "22", lg: "18", md: "24" }}
              color="#5B2E1A"
            />
            Assumenda, quia temporibus eveniet a libero incidunt suscipit
          </ListItem>
          <ListItem
            fontSize={{ "2xl": "20px", xl: "18px", lg: "14px", md: "24px" }}
            fontWeight={500}
          >
            <ListIcon
              as={MdCheckCircle}
              fontSize={{ "2xl": "24", xl: "22", lg: "18", md: "24" }}
              color="#5B2E1A"
            />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </ListItem>
        </List>
        <Button
          w="30%"
          mt={8}
          size={{ "2xl": "lg", xl: "lg", lg: "sm", md: "md" }}
          bgColor="#5B2E1A"
          color="white"
          _hover={{
            bgColor: "white",
            color: "#5B2E1A",
            border: "2px solid #5B2E1A",
          }}
          rightIcon={<BsArrowRightCircle size={20} />}
          onClick={handleCreate}
        >
          Create Recipe
        </Button>
      </Flex>
    </Flex>
  );
};

export default Create;
