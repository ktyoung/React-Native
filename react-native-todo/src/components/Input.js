import React from "react";
import { Dimensions } from "react-native";
import { styled } from "styled-components/native";
import PropTypes from "prop-types";

const StyledInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.main,
}))`
  width: ${({ width }) => width - 40}px;
  height: 60px;
  margin: 3px 0px;
  padding: 15px 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.itemBackground};
  font-size: 25px;
  color: ${({ theme }) => theme.text};
`;

const Input = ({
  placeholder,
  value,
  onChangeText,
  onSubmitEditing,
  onBlur,
}) => {
  // Dimensions를 사용하면, 현재 화면의 크기를 알 수 있다.
  const width = Dimensions.get("window").width;

  return (
    <StyledInput
      width={width}
      placeholder={placeholder}
      maxLength={50} // 최대 50글자까지 입력
      autoCapitalize="none" // 자동 대문자 변환 끄기
      autoCorrect={false} // 자동 수정 기능 끄기
      returnKeyType="done" // 키보드 완료 버튼 설정 타입을 done으로 변경
      keyboardAppearance="dark" // 아이폰의 키보드 색상을 변경
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      onBlur={onBlur}
    />
  );
};

Input.PropTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default Input;
