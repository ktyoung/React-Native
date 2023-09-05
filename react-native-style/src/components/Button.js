import React from "react";
import { styled } from "styled-components/native";

const ButtonContainer = styled.TouchableOpacity`
  /* 스타일드 컴포넌트는 백틱 기호 안에서 props 접근이 가능함 */
  /* → Button의 title 값에 따라 배경색을 다르게 적용하려면? */
  background-color: ${(props) =>
    props.title === "Styled Button 1" ? props.theme.blue : props.theme.purple};
  border-radius: 15px;
  padding: 15px 40px;
  margin: 10px 0px;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.text};
`;

const Button = (props) => {
  return (
    <ButtonContainer title={props.title}>
      <Title>{props.title}</Title>
    </ButtonContainer>
  );
};

export default Button;
