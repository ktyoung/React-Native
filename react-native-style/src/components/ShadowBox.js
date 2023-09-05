import React from "react";
import { Platform, StyleSheet, View } from "react-native";

export default () => {
  return <View style={styles.shadow}></View>;
};

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: "#fff",
    width: 200,
    height: 200,

    // Platform 모듈로 각 플랫폼마다 다른 코드가 적용되도록 코드 작성
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 10,
          height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
      },
      android: {
        elevation: 20,
      },
    }),
  },
});
