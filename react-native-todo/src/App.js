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
  const [tasks, setTasks] = useState({
    1: { id: "1", text: "Test", completed: false },
    2: { id: "2", text: "Sample", completed: false },
    3: { id: "3", text: "React-Native", completed: false },
    4: { id: "4", text: "Hello, World!", completed: false },
  });

  const _addTask = () => {
    const ID = Date.now().toString();
    const newTaskObject = {
      // id는 할 일 항목이 추가되는 시간의 타임스탬프 이용
      // text는 Input 컴포넌트에 입력된 값
      // completed는 항상 false(새로 추가된 항목이므로)
      [ID]: { id: ID, text: newTask, completed: false },
    };

    // Input 컴포넌트 초기화
    setNewTask("");
    // 기존의 목록을 유지한 상태에서 새로운 항목이 추가되게 구현
    setTasks({ ...tasks, ...newTaskObject });
  };

  const _deleteTask = (id) => {
    const currentTasks = Object.assign({}, tasks);
    delete currentTasks[id];
    setTasks(currentTasks);
  };

  // 함수를 호출할 때마다 completed 값이 전환되는 함수
  const _toggleTask = (id) => {
    const currentTasks = Object.assign({}, tasks);
    currentTasks[id]["completed"] = !currentTasks[id]["completed"];
    setTasks(currentTasks);
  };

  // 수정된 항목이 전달되면 할 일 목록에서 해당 항목을 수정하는 함수
  const _updateTask = (item) => {
    const currentTasks = Object.assign({}, tasks);
    currentTasks[item.id] = item;
    setTasks(currentTasks);
  };

  const _handleTextChange = (text) => {
    setNewTask(text);
  };

  const _onBlur = () => {
    setNewTask("");
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
          onBlur={_onBlur}
        />
        <List width={width}>
          {Object.values(tasks)
            .reverse()
            .map((item) => (
              <Task
                key={item.id}
                item={item}
                deleteTask={_deleteTask}
                toggleTask={_toggleTask}
                updateTask={_updateTask}
              />
            ))}
        </List>
      </Container>
    </ThemeProvider>
  );
}
