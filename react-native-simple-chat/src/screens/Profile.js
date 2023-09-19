import React, { useContext } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { UserContext } from "../contexts";
import { Button } from "../components";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

const Profile = () => {
  const { dispatch } = useContext(UserContext);

  const _handleLogoutButtonPress = async () => {
    try {
      await logout();
    } catch (e) {
      console.log("[Profile] logout: ", e.message);
    } finally {
      dispatch({});
    }
  };

  return (
    <Container>
      <Button title="logout" onPress={_handleLogoutButtonPress} />
    </Container>
  );
};

export default Profile;
