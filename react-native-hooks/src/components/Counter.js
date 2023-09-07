import React, { useState } from "react";
import { styled } from "styled-components/native";
import Button from "./Button";

const StyledText = styled.Text`
  font-size: 24px;
  margin: 10px;
`;

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <StyledText>count: {count}</StyledText>
      <Button
        title="+"
        onPress={() => {
          // 이전 상태의 값에 의존하여 상태를 변경할 경우, 세터 함수에 함수를 인자로 전달하여 이전 값을 이용하도록 작성해야 문제가 생기지 않음.
          setCount((prevCount) => prevCount + 1);
          setCount((prevCount) => prevCount + 1);
        }}
      ></Button>
      <Button
        title="-"
        onPress={() => {
          setCount(count - 1);
        }}
      ></Button>
    </>
  );
};

export default Counter;
