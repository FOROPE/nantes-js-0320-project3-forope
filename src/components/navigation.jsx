import React from 'react';
import styled from 'styled-components';

const ContainerNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
`;

const NavItem = styled.li`
  list-style: none;
  padding: 0px;
  margin-right: 3vw;
`;

const Logo = styled.img`
  margin-left: 3vw;
`;

export default function Navigation() {
  return (
    <>
      <ContainerNav>
        <Logo src="#" alt="logo" />
        <NavList>
          <NavItem>Entreprise</NavItem>
          <NavItem>Particulier</NavItem>
          <NavItem>Presse</NavItem>
          <NavItem>Forope</NavItem>
        </NavList>
      </ContainerNav>
    </>
  );
}
