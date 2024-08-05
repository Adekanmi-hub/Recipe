import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

export const EditModal = ({ isOpen, onClose, initialValues, onSave }) => {
  const [editedValues, setEditedValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedValues((prev) => ({ ...prev, [name]: value }));
  };
  const toast = useToast();
  const handleSave = () => {
    onSave(editedValues);
    toast({
      title: "Recipe Edited successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    onClose();
  };

  return (
    <Modal isCentered={true} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent>
        <ModalHeader>Edit Recipe</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel>Recipe Name</FormLabel>
              <Input
                name="recipeName"
                value={editedValues.recipeName}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Nationality</FormLabel>
              <Input
                name="nationality"
                value={editedValues.nationality}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Cooking Time</FormLabel>
              <Input
                name="cookingTime"
                value={editedValues.cookingTime}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Ingredients</FormLabel>
              <Input
                name="ingredients"
                value={editedValues.ingredients}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input
                name="fullName"
                value={editedValues.fullName}
                onChange={handleInputChange}
              />
            </FormControl>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button
            bgColor="wheat"
            color="#5B2E1A"
            _hover={{
              bgColor: "white",
              color: "#5B2E1A",
            }}
            mr={3}
            onClick={handleSave}
          >
            Save
          </Button>
          <Button
            bgColor="red"
            color="white"
            _hover={{
              bgColor: "white",
              color: "#5B2E1A",
            }}
            onClick={onClose}
          >
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditModal;
