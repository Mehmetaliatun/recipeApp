import { Link } from "react-router-dom";
import styled from "styled-components";
import Flex from "../globalStyles/Flex.style";
export const Nav = styled(Flex)`
  padding: 1rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.navbarBgColor};
`;

export const Brand = styled(Link)`
  padding: 1rem 0;
  color: ${({ theme }) => theme.colors.logoColor};
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;
  span {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.mainColor};
  }
`;

export const Menu = styled(Flex)``;

export const MenuLink = styled(Link)`
  text-align: center;
  padding: 1rem 2rem;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.linkColor};
  transition: all 0.3s ease-in;
  &:hover {
    color: ${({ theme }) => theme.colors.mainColor};
    font-weight: bold;
  }
`;
