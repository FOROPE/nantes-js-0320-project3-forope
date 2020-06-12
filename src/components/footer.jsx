import React from 'react';
import styled from 'styled-components';
import circle from './img/circle.png';

const ContainerFooter = styled.div`
  background-color: #087e6e;
  width: 100%;
  display: flex;
`;

const ListItem = styled.ul`
  list-style: none;
  text-align: left;
  color: white;
  flex-direction: row;
`;

const ListLogo = styled.li`
  padding-top: 1vh;
`;

const ContainerLogo = styled.ul`
  margin-right: 70vh;
  list-style: none;
  text-align: left;
  flex-direction: row;
`;

const Item = styled.li`
  padding-top: 1vh;
`;

const Logo = styled.img`
  width: 34px;
  margin-right: 1vh;
`;

export default function Footer() {
  return (
    <ContainerFooter>
      <ContainerLogo>
        <Logo src="" alt="logo forope" />
        <ListLogo>
          <Logo src={circle} alt="logo réseaux sociaux" />
          <Logo src={circle} alt="logo réseaux sociaux" />
          <Logo src={circle} alt="logo réseaux sociaux" />
          <Logo src={circle} alt="logo réseaux sociaux" />
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
