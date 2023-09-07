import React, { useEffect, useState } from "react";
import { styled } from "styled-components/native";

const StyledTextInput = styled.TextInput.attrs({
  autoCapitalize: "none",
  autoCorrect: false,
})`
  border: 1px solid #757575;
  padding: 10px;
  margin: 10px 0px;
  width: 200px;
  font-size: 20px;
`;

const StyledText = styled.Text`
  font-size: 24px;
  margin: 10px;
`;

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    console.log(`name: ${name}, email: ${email} \n`);
    return () => console.log(`\n ===== Form Component Unmount ===== \n`);
  }, []);

  return (
    <>
      <StyledText>Name: {name}</StyledText>
      <StyledText>Email: {email}</StyledText>
      <StyledTextInput
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="name"
      />
      <StyledTextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="email"
      />
    </>
  );
};

export default Form;
