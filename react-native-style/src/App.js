import React, { useState } from "react";
import { ThemeProvider, styled } from "styled-components/native";
import Button from "./components/Button";
import Input from "./components/Input";
import { darkTheme, lightTheme, theme } from "./components/theme";
import { Switch } from "react-native";

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.background};
  align-items: center;
  justify-content: center;
`;

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const _toggleSwitch = () => setIsDark(!isDark);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container>
        <Switch value={isDark} onValueChange={_toggleSwitch} />
        <Button title="Styled Button 1" />
        <Button title="Styled Button 2" />
        <Input borderColor="#3498db" />
        <Input borderColor="#9b59b6" />
      </Container>
    </ThemeProvider>
  );
};

export default App;
