import React from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./Login.style";
import meal from "../../assets/meal.svg";

const Login = () => {
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <Header>{"<CW/>"}RECIPE</Header>
        <StyledForm>
          <StyledInput />
          <StyledInput />
          <StyledButton>LOGIN</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
