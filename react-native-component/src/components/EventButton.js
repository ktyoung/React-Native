import React from "react";
import { TouchableOpacity, Text } from "react-native";

const EventButton = () => {
  const _onPressIn = () => {
    console.log("Press In \n");
  };
  const _onPressOut = () => {
    console.log("Press Out \n");
  };
  const _onPress = () => {
    console.log("Press \n");
  };
  const _onLongPress = () => {
    console.log("Long Press \n");
  };

  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#3498db",
        padding: 10,
        margin: 10,
        borderRadius: 8,
      }}
      onPressIn={_onPressIn}
      onPressOut={_onPressOut}
      onPress={_onPress}
      onLongPress={_onLongPress}
      // onLongPress 호출 시간 조절
      delayLongPress={3000}
    >
      <Text style={{ fontSize: 18, color: "white" }}>Press</Text>
    </TouchableOpacity>
  );
};

export default EventButton;
