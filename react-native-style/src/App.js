import React from "react";
import { Text, View } from "react-native";
import { textStyles } from "./styles";

const App = () => {
  return (
    // 인라인 스타일링
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* 클래스 스타일링 */}
      <Text style={[textStyles.text, { color: "green" }]}>
        Inline Styling - Text
      </Text>
      {/* 여러 개의 클래스 스타일을 적용해야 할 때는 배열을 이용하기 */}
      {/* 뒤에 오는 스타일이 앞에 있는 스타일을 덮어씀 */}
      <Text style={[textStyles.text, textStyles.error]}>
        Inline Styling - Error
      </Text>
    </View>
  );
};

export default App;
