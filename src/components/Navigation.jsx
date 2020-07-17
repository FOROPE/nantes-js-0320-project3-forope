import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './img/Logo.svg';
import { Punctuation, LinkButton } from '../mainStyle';

const ContainerNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  padding-top: 1rem;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
`;

const NavItem = styled.li`
  list-style: none;
  padding: 0px;
  margin-right: 3rem;
  font-size: 19px;
`;

const NavButton = styled(NavItem)`
  border-radius: 50px;
  padding: 0.4rem 1rem;
  background: ${(props) => props.theme.mediumGreen};
`;

const LogoNav = styled.img`
  margin-left: 3rem;
  width: 3rem;
`;

export default function Navigation() {
  return (
    <ContainerNav>
      <Link to="/">
        <LogoNav src={Logo} alt="logo" />
      </Link>
      <NavList>
        <NavItem>Entreprise</NavItem>
        <NavItem>Particulier</NavItem>
        <NavItem>
          <Punctuation>Pourquoi nous ?</Punctuation>
        </NavItem>
        <NavButton>
          <LinkButton button to="/contact">
            Contact
          </LinkButton>
        </NavButton>
      </NavList>
    </ContainerNav>
  );
}
