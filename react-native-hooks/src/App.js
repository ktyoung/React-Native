import React, { useState } from "react";
import { styled } from "styled-components/native";
import Length from "./components/Length";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Container>
      <Length />
    </Container>
  );
};

export default App;
