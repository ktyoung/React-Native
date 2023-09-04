import React from "react";
import { View, Text } from "react-native";
import MyButton from "./components/MyButton";
import Counter from "./components/Counter";
import EventButton from "./components/EventButton";
import EventInput from "./components/EventInput";

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 30, marginBottom: 10 }}>Props</Text>
      {/* 1. 부모 → 자식 */}
      <MyButton
        title="Button"
        onPress={() => {
          alert("props");
        }}
      />
      {/* 2. 컴포넌트 태그 사이의 값 전달 */}
      <MyButton
        title="Button"
        onPress={() => {
          alert("clildren");
        }}
      >
        Chlidren Props
      </MyButton>
      {/* 3. defaultProps */}
      <MyButton
        onPress={() => {
          alert("default");
        }}
      />

      <Counter />

      <EventButton />
      <EventInput />
    </View>
  );
};

export default App;
