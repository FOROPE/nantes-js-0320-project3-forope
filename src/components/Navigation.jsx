import React from 'react';
import styled from 'styled-components';
import Logo from './img/Logo.svg';
import { Punctuation, LinkPage } from '../mainStyle';

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
      <LogoNav src={Logo} alt="logo" />
      <NavList>
        <NavItem>Entreprise</NavItem>
        <NavItem>Particulier</NavItem>
        <NavItem>
          <Punctuation>Pourquoi nous ?</Punctuation>
        </NavItem>
        <NavButton>
          <LinkPage button href="/#" src="contact">
            Contact
          </LinkPage>
        </NavButton>
      </NavList>
    </ContainerNav>
  );
}
