import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const str = "Hello";

  return (
    // <View> ≒ <div> → UI를 구성하는 가장 기본적인 요소
    <View style={styles.container}>
      <Text style={styles.text}>
        {/* 삼항 연산자 (조건문 사용) */}
        {str === "Hello" ? str : "React Native"}
      </Text>

      {/* AND 연산자와 OR 연산자 */}
      {str === "Hello" && <Text>str is Hello</Text>}
      {str !== "Hello" && <Text>str is not Hello</Text>}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
  },
});
