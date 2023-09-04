import React from "react";
import { Text, TouchableOpacity } from "react-native";

const MyButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#3498db",
        padding: 10,
        margin: 10,
        borderRadius: 8,
      }}
      onPress={() => props.onPress()}
    >
      <Text style={{ fontSize: 18, color: "white" }}>
        {/* props에 children이 있다면 title보다 우선시되도록 작성 */}
        {props.children || props.title}
      </Text>
    </TouchableOpacity>
  );
};

// 컴포넌트에 사용될 기본 값을 입력하여 빈 값이 나타나는 것을 방지
MyButton.defaultProps = {
  title: "Button",
};

export default MyButton;
