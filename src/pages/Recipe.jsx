import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const foodTypes = ["Breakfast", "Lunch", "Dinner", "Dessert", "Snack", "Drink"];

export const Recipe = () => {
  const [formDataArray, setFormDataArray] = useState(() => {
    const savedFormDataArray = localStorage.getItem("recipeFormDataArray");
    return savedFormDataArray ? JSON.parse(savedFormDataArray) : [];
  });

  const [formData, setFormData] = useState({
    recipeName: "",
    foodType: "",
    nationality: "",
    cookingTime: "",
    ingredient: "",
    fullName: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newFormDataArray = [...formDataArray, formData];
      setFormDataArray(newFormDataArray);
      localStorage.setItem(
        "recipeFormDataArray",
        JSON.stringify(newFormDataArray)
      );
      console.log("Recipe submitted locally");
      // Reset form
      setFormData({
        recipeName: "",
        foodType: "",
        nationality: "",
        cookingTime: "",
        ingredients: "",
        fullName: "",
      });
      handleToast();
    } catch (error) {
      console.error("Error submitting recipe locally:", error);
    }
  };
  const toast = useToast();
  const navigate = useNavigate();

  const handleToast = () => {
    toast({
      title: "Recipe submitted successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    navigate("/home/categories");
  };

  return (
    <Box
      pt="7%"
      w="100%"
      h="100vh"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgImage={"/assets/Header1.jpg"}
    >
      <FormControl
        as="form"
        border="2px solid #5B2E1A"
        p={4}
        w="40%"
        m="auto"
        bgColor="#5B2E1A"
        borderRadius="10px"
        py={10}
        onSubmit={handleSubmit}
      >
        <Text
          textAlign="center"
          fontSize={{ "2xl": "6xl", xl: "4xl", lg: "xl" }}
          fontWeight="500"
          fontFamily="Merienda, cursive"
          color="white"
        >
          Create your recipe
        </Text>
        <FormLabel htmlFor="fullName" fontSize="18px" color="white">
          Full Name
        </FormLabel>
        <Input
          type="text"
          name="fullName"
          id="fullName"
          border="2px solid white"
          placeholder="Enter Full Name "
          isRequired
          color="white"
          value={formData.fullName}
          onChange={handleInputChange}
        />
        <FormLabel htmlFor="recipeName" pt={4} fontSize="18px" color="white">
          Recipe Name
        </FormLabel>
        <Input
          type="text"
          name="recipeName"
          id="recipeName"
          border="2px solid white"
          placeholder="Enter Recipe Name"
          isRequired
          color="white"
          value={formData.recipeName}
          onChange={handleInputChange}
        />
        <FormLabel htmlFor="pcSelector" fontSize="18px" color="white" pt={4}>
          Food Type
        </FormLabel>
        <Select
          id="pcSelector"
          name="foodType"
          width="100%"
          size="md"
          border="2px solid white"
          isRequired
          color="white"
          placeholder="Select food type"
          value={formData.foodType}
          onChange={handleInputChange}
        >
          {foodTypes.map((foodType, index) => (
            <option key={`${foodType}-${index}`} value={foodType}>
              {foodType}
            </option>
          ))}
        </Select>
        <FormLabel htmlFor="nationality" fontSize="18px" color="white" pt={4}>
          Nationality
        </FormLabel>
        <Input
          type="text"
          name="nationality"
          id="nationality"
          border="2px solid white"
          placeholder="Enter Nationality"
          isRequired
          color="white"
          value={formData.nationality}
          onChange={handleInputChange}
        />

        <FormLabel htmlFor="cookingTime" fontSize="18px" color="white" pt={4}>
          Cooking Time
        </FormLabel>
        <Input
          type="text"
          name="cookingTime"
          id="cookingTime"
          border="2px solid white"
          isRequired
          color="white"
          placeholder="Enter Cooking Time"
          value={formData.cookingTime}
          onChange={handleInputChange}
        />
        <FormLabel htmlFor="ingredients" fontSize="18px" color="white" pt={4}>
          Ingredient
        </FormLabel>
        <Textarea
          name="ingredients"
          id="ingredients"
          border="2px solid white"
          isRequired
          color="white"
          minH={{ "2xl": "300px", xl: "100px", lg: "60px" }}
          maxH={{ "2xl": "400px", xl: "100px", lg: "60px" }}
          placeholder="Enter list of all Ingredients e.g. 1 cup of sugar, 2 cups of flour, etc."
          value={formData.ingredients}
          onChange={handleInputChange}
        />

        <Button mt={4} w="100%" type="submit">
          Submit
        </Button>
      </FormControl>
    </Box>
  );
};

export default Recipe;
