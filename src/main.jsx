import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.jsx";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Categories from "./pages/Categories.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import Landing from "./pages/Landing.jsx";
import Recipe from "./pages/Recipe.jsx";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "/home",
        element: <Landing />,
      },
      {
        path: "recipe",
        element: <Recipe />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/home" replace />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
