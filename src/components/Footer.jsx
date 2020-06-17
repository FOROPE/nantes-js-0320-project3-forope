import React from 'react';
import styled from 'styled-components';
import circle from './img/circle.png';
import { Flex } from '../mainStyle';

const ContainerFooter = styled(Flex)`
  background-color: #087e6e;
  width: 100%;
  margin-top: 1.5rem;
  font-size: 1rem;
`;

const ListItem = styled.ul`
  list-style: none;
  text-align: left;
  color: white;
`;

const ListLogo = styled.li`
  padding-top: 0.5rem;
`;

const ContainerLogo = styled.ul`
  margin-right: 40rem;
  list-style: none;
  text-align: left;
`;

const Item = styled.li`
  padding-top: 0.5rem;
`;

const Logo = styled.img`
  width: 2rem;
  margin-right: 0.5rem;
`;

export default function Footer() {
  return (
    <ContainerFooter row>
      <ContainerLogo>
        <Logo src="" alt="logo forope" />
        <ListLogo>
          <Logo src={circle} alt="logo social network" />
          <Logo src={circle} alt="logo social network" />
          <Logo src={circle} alt="logo social network" />
          <Logo src={circle} alt="logo social network" />
        </ListLogo>
      </ContainerLogo>

      <ListItem>
        <Item>Forope</Item>
        <Item>Mentions légales</Item>
        <Item>Blog</Item>
        <Item>Ressources</Item>
        <Item>Tutos</Item>
        <Item>Business cases</Item>
      </ListItem>

      <ListItem>
        <Item>Centre de formation</Item>
        <Item>Dirigeant</Item>
        <Item>RH/formation</Item>
        <Item>Opérations</Item>
        <Item>Particulier</Item>
      </ListItem>

      <ListItem>
        <Item>Presse</Item>
        <Item>Kit média</Item>
        <Item>Relation presse</Item>
      </ListItem>
    </ContainerFooter>
  );
}
