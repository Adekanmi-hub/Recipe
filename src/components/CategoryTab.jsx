import {
  Flex,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import Breakfast from "./utils/Breakfast.jsx";
import Lunch from "./utils/Lunch.jsx";
import Dinner from "./utils/Dinner.jsx";
import Dessert from "./utils/Dessert.jsx";
import Snacks from "./utils/Snacks.jsx";
import Drink from "./utils/Drink.jsx";

export const CategoryTab = () => {
  return (
    <Flex w="100%" bgColor="#5B2E1A" minH="900px">
      <Flex pt="20px" px={{ "2xl": "200px", xl: "20px" }} w="100%">
        <Tabs isFitted variant="unstyled" w="100%">
          <TabList justifyContent="space-between">
            <Tab
              fontSize="large"
              fontWeight="500"
              fontFamily="Merienda, cursive"
              color={"white"}
            >
              BreakFast
            </Tab>
            <Tab
              fontSize="large"
              fontWeight="500"
              fontFamily="Merienda, cursive"
              color={"white"}
            >
              Lunch
            </Tab>
            <Tab
              fontSize="large"
              fontWeight="500"
              fontFamily="Merienda, cursive"
              color={"white"}
            >
              Dinner
            </Tab>
            <Tab
              fontSize="large"
              fontWeight="500"
              fontFamily="Merienda, cursive"
              color={"white"}
            >
              Dessert
            </Tab>
            <Tab
              fontSize="large"
              fontWeight="500"
              fontFamily="Merienda, cursive"
              color={"white"}
            >
              Snack
            </Tab>
            <Tab
              fontSize="large"
              fontWeight="500"
              fontFamily="Merienda, cursive"
              color={"white"}
            >
              Drink
            </Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="blue.500"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel>
              <Breakfast />
            </TabPanel>
            <TabPanel>
              <Lunch />
            </TabPanel>
            <TabPanel>
              <Dinner />
            </TabPanel>
            <TabPanel>
              <Dessert />
            </TabPanel>
            <TabPanel>
              <Snacks />
            </TabPanel>
            <TabPanel>
              <Drink />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Flex>
  );
};

export default CategoryTab;
