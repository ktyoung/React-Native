import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import AuthStack from "./AuthStack";
import { Spinner } from "../components";
import { ProgressContext } from "../contexts";

const Navigation = () => {
  const { inProgress } = useContext(ProgressContext);

  return (
    <NavigationContainer>
      <AuthStack />
      {inProgress && <Spinner />}
    </NavigationContainer>
  );
};

export default Navigation;
