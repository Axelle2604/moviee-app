import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: solid 1px rgb(238, 238, 238);
`;

export const Title = styled.h1`
  color: black;
  font-weight: 800;
  margin-left: 15px;
  transition: 400ms;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  transition: 400ms;
  &:hover ${Title} {
    color: #40e0d0;
    transition: 400ms;
  }
  &:hover {
    color: #40e0d0;
    transition: 400ms;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TextBold = styled.span`
  color: black;
  font-weight: 800;
  margin-left: 15px;
`;

export const SubLogo = styled.i`
  font-size: 20px;
`;

export const LangButton = styled.div`
  background-color: #282828;
  color: white;
  padding: 10px;
  margin-left: 10px;
  border-radius: 10px;
  transition: 0.2s;
  &:hover {
    background-color: #40e0d0;
    cursor: pointer;
    transition: 0.2s;
  }
`;
