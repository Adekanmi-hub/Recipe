import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import EditModal from "./EditModal.jsx";

export const Lunch = () => {
  const [recipes, setRecipes] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editIndex, setEditIndex] = useState(-1);
  const [editedValues, setEditedValues] = useState({
    recipeName: "",
    nationality: "",
    cookingTime: "",
    ingredients: "",
    fullName: "",
    foodType: "Lunch",
  });

  useEffect(() => {
    const savedFormDataArray = localStorage.getItem("recipeFormDataArray");
    if (savedFormDataArray) {
      const parsedData = JSON.parse(savedFormDataArray);
      const lunchRecipes = parsedData.filter(
        (recipe) => recipe.foodType === "Lunch"
      );
      setRecipes(lunchRecipes);
    }
  }, []);

  const handleDelete = (index) => {
    const updatedRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(updatedRecipes);
    localStorage.setItem("recipeFormDataArray", JSON.stringify(updatedRecipes));
  };

  const handleEdit = (index) => {
    setEditIndex(index);

    const recipe = recipes[index];
    setEditedValues({
      recipeName: recipe.recipeName || "",
      nationality: recipe.nationality || "",
      cookingTime: recipe.cookingTime || "",
      ingredients: recipe.ingredients || "",
      fullName: recipe.fullName || "",
      foodType: recipe.foodType || "Lunch",
    });
    onOpen();
  };

  const handleSave = (editedRecipe) => {
    const updatedRecipes = [...recipes];

    updatedRecipes[editIndex] = editedRecipe;
    setRecipes(updatedRecipes);
    localStorage.setItem("recipeFormDataArray", JSON.stringify(updatedRecipes));
    onClose();
    setEditedValues({
      recipeName: "",
      nationality: "",
      cookingTime: "",
      ingredients: "",
      fullName: "",
      foodType: "Lunch",
    });
  };

  return (
    <Box w="100%">
      {recipes.map((recipe, index) => (
        <Flex key={index} gap={10} py={4} px={4} w="100%">
          <Image
            src={"/assets/Lunch.jpg"}
            w="330px"
            height="auto"
            alt={"recipe"}
            borderRadius="10px"
          />
          <Flex flexDir="column" gap={8} w="100%">
            <Flex flexDir="column" gap={8} w="100%">
              <Text
                color="white"
                fontSize="3xl"
                fontFamily="Merienda, cursive"
                fontWeight={500}
              >
                {recipe.recipeName}
              </Text>
              <Flex flexDir="column">
                <Text
                  color="white"
                  fontSize="3xl"
                  fontFamily="Merienda, cursive"
                  fontWeight={500}
                >
                  Nationality:
                </Text>
                <Text color="white" fontWeight={500}>
                  {recipe.nationality}
                </Text>
              </Flex>
              <Flex flexDir="column">
                <Text
                  color="white"
                  fontSize="3xl"
                  fontFamily="Merienda, cursive"
                  fontWeight={500}
                >
                  Cooking Time:
                </Text>
                <Text color="white" fontWeight={500}>
                  {recipe.cookingTime}
                </Text>
              </Flex>
              <Flex flexDir="column">
                <Text
                  color="white"
                  fontSize="3xl"
                  fontFamily="Merienda, cursive"
                  fontWeight={500}
                >
                  Ingredients:
                </Text>
                <Box overflowY={"scroll"} minH="100px" maxHeight="100px">
                  <Text color="white" fontWeight={500}>
                    {recipe.ingredients}
                  </Text>
                </Box>
              </Flex>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center" w="100%">
              <Text color="white" fontWeight={500}>
                {recipe.fullName}
              </Text>
              <Flex gap={2} justify="space-between">
                <Button
                  bgColor="wheat"
                  color="#5B2E1A"
                  _hover={{
                    border: "2px solid wheat",
                    color: "white",
                    bgColor: "#5B2E1A",
                  }}
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </Button>
                <Button
                  bgColor="red"
                  color="white"
                  _hover={{
                    bgColor: "#c41f09",
                    color: "white",
                  }}
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      ))}
      <EditModal
        isOpen={isOpen}
        onClose={onClose}
        initialValues={editedValues}
        onSave={handleSave}
      />
    </Box>
  );
};

export default Lunch;
