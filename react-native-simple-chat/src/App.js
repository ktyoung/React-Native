import { ThemeProvider } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
    </ThemeProvider>
  );
};

export default App;
