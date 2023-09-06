import React, { useState } from "react";
import { ThemeProvider, styled } from "styled-components/native";
import { theme } from "./theme";
import { Dimensions, StatusBar } from "react-native";
import Input from "./components/Input";
import IconButton from "./components/IconButton";
import { images } from "./images";
import Task from "./components/Task";

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

const List = styled.ScrollView`
  flex: 1;
  width: ${({ width }) => width - 40}px;
`;

export default function App() {
  const [newTask, setNewTask] = useState("");

  const _addTask = () => {
    alert(`Add: ${newTask}`);
    setNewTask("");
  };

  const _handleTextChange = (text) => {
    setNewTask(text);
  };

  const width = Dimensions.get("window").width;

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
        <Input
          placeholder="+ Add a Task"
          value={newTask}
          onChangeText={_handleTextChange}
          onSubmitEditing={_addTask}
        />
        <List width={width}>
          <Task text="Test" />
          <Task text="Sample" />
          <Task text="React-Native" />
          <Task text="Hello, World!" />
        </List>
      </Container>
    </ThemeProvider>
  );
}
