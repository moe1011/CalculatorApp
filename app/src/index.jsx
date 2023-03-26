import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import "./index.css";
import { ChakraProvider } from '@chakra-ui/react'

const container = document.getElementById("target");
const root = createRoot(container);

root.render(
  <ChakraProvider>
    <App/>
  </ChakraProvider>
);
