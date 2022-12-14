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
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const userInfo = {
    username: "atunmehmetali",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(-1);
    sessionStorage.setItem("user", JSON.stringify(userInfo));
  };
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <Header>{"<MAA/>"}RECIPE</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput placeholder="Enter username" type="text" />
          <StyledInput placeholder="Enter password" type="password" />
          <StyledButton type="submit">LOGIN</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
