import React from "react";
import { Text, TouchableOpacity } from "react-native";

const MyButton = () => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#3498db",
        padding: 10,
        margin: 10,
        borderRadius: 8,
      }}
      onPress={() => alert("Click !")}
    >
      <Text style={{ fontSize: 18 }}>My Button</Text>
    </TouchableOpacity>
  );
};

export default MyButton;
