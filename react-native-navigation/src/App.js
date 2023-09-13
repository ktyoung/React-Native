import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import styled from "styled-components/native";
import TabNavigation from "./navigations/Tab";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default App;
