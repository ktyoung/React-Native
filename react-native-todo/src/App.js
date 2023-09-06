import React from "react";
import { ThemeProvider, styled } from "styled-components/native";
import { theme } from "./theme";
import { StatusBar } from "react-native";

// SafeAreaView 컴포넌트를 사용하면, iOS 환경에서 노치 디자인 문제를 해결할 수 있다.
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.main};
  align-self: flex-start;
  margin: 0px 20px;
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        {/* StatusBar 컴포넌트를 사용하면, 안드로이드 환경에서 상태 바의 스타일을
        변경하거나 상태 바가 컴포넌트를 가리는 문제를 수정할 수 있다. */}
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.background}
        />
        <Title>TODO List</Title>
      </Container>
    </ThemeProvider>
  );
}
