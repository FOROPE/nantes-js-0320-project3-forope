import React from 'react';
import styled from 'styled-components';
import Logo from './img/Logo.svg';
import { Punctuation } from '../mainStyle';

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
`;

const NavItem = styled.li`
  list-style: none;
  padding: 0px;
  margin-right: 3rem;
`;

const LogoNav = styled.img`
  margin-left: 3rem;
  width: 40px;
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
        <NavItem>Forope</NavItem>
      </NavList>
    </ContainerNav>
  );
}
