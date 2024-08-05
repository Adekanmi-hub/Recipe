import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import CategoryTab from "../components/CategoryTab";
import { IoSearchOutline } from "react-icons/io5";

const recipeData = [
  {
    recipeName: "",
    foodType: "",
    nationality: "",
    cookingTime: "",
    ingredient: "",
    fullName: "",
  },
];
export const Categories = () => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredArray, setFilteredArray] = useState(recipeData);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
    const filteredItems = recipeData.filter((user) =>
      user.recipeName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredArray(filteredItems);
  };
  return (
    <Box w="100%">
      <Flex pt="120px" flexDir="column" w="100%">
        <Flex
          flexDir="column"
          pb="40px"
          px={{ "2xl": "400px", xl: "400px", lg: "200px" }}
          justify="space-around"
          w="100%"
        >
          <Text
            fontSize={{ "2xl": "5xl", xl: "5xl", lg: "4xl" }}
            fontWeight="500"
            fontFamily="Merienda, cursive"
            textAlign="center"
          >
            Recipes & Cooking Ideas
          </Text>
          <Text
            fontSize={{ "2xl": "2xl", xl: "lg" }}
            fontWeight="400"
            textAlign="center"
            pt="20px"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel sunt
            maxime dicta, eveniet explicabo eos delectus in amet eius dolorem
            suscipit earum autem distinctio exercitationem dolores optio sed
            pariatur nostrum?
          </Text>
        </Flex>
        <Flex px={{ "2xl": "700px", xl: "400px", lg: "300px" }} pb="20px">
          <InputGroup border="2px solid #5B2E1A" borderRadius="10px">
            <InputLeftElement pointerEvents="none">
              <IoSearchOutline color="gray.300" />
            </InputLeftElement>
            <Input
              type="text"
              value={searchItem}
              onChange={handleInputChange}
              placeholder="Search by recipe name"
            />
          </InputGroup>
        </Flex>
      </Flex>
      <CategoryTab />
    </Box>
  );
};

export default Categories;
