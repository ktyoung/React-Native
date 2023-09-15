import React, { forwardRef, useState } from "react";
import styled from "styled-components/native";
import PropType from "prop-types";

const Container = styled.View`
  flex-direction: column;
  width: 100%;
  height: 10px 0;
`;

const Label = styled.Text`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
  color: ${({ theme, isFocused }) => (isFocused ? theme.text : theme.label)};
`;

const StyledTextInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.inputPlaceholder,
}))`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 20px 10px;
  font-size: 16px;
  border: 1px solid
    ${({ theme, isFocused }) => (isFocused ? theme.text : theme.inputBorder)};
  border-radius: 4px;
`;

const Input = forwardRef(
  (
    {
      label,
      value,
      onChangeText,
      onSubmitEditing,
      onBlur,
      placeholder,
      isPassword,
      returnKeyType,
      maxLength,
    },
    ref
  ) => {
    const [isFocused, setIsFoused] = useState(false);

    return (
      <Container>
        <Label isFocused={isFocused}>{label}</Label>
        <StyledTextInput
          ref={ref}
          isFocused={isFocused}
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          onFocus={() => {
            setIsFoused(true);
          }}
          onBlur={() => {
            setIsFoused(false);
            onBlur();
          }}
          placeholder={placeholder}
          secureTextEntry={isPassword}
          returnKeyType={returnKeyType}
          maxLength={maxLength}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="none"
          underlineColorAndroid="transparent"
        />
      </Container>
    );
  }
);

Input.defaultProps = {
  onBlur: () => {},
};

Input.propTypes = {
  label: PropType.string.isRequired,
  value: PropType.string.isRequired,
  onChangeText: PropType.func.isRequired,
  onSubmitEditing: PropType.func.isRequired,
  onBlur: PropType.func,
  placeholder: PropType.string,
  isPassword: PropType.bool,
  returnKeyType: PropType.oneOf(["done", "next"]),
  maxLength: PropType.number,
};

export default Input;
