import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import circle from './img/circle.png';
import { Flex } from '../mainStyle';

const ContainerFooter = styled(Flex)`
  background-color: ${(props) => props.theme.mediumGreen};
  width: 100%;
  margin-top: 1.5rem;
  font-size: 1rem;
  justify-content: space-between;
`;

const ListItem = styled.ul`
  list-style: none;
  text-align: left;
  color: white;
`;

const ListLogo = styled.li`
  padding-top: 0.5rem;
`;

const ListLink = styled(Flex)`
  margin-right: 2rem;
`;

const ContainerLogo = styled.ul`
  list-style: none;
  text-align: left;
`;

const Item = styled.li`
  padding-top: 0.5rem;
`;

const CompanyLogo = styled.img`
  width: 18%;
`;

const LogoItem = styled.img`
  width: 2rem;
  margin-right: 0.5rem;
`;

export default function Footer({ logo }) {
  return (
    <ContainerFooter row>
      <ContainerLogo>
        <CompanyLogo src={logo} alt="" />
        <ListLogo>
          <LogoItem src={circle} alt="logo social network" />
          <LogoItem src={circle} alt="logo social network" />
          <LogoItem src={circle} alt="logo social network" />
          <LogoItem src={circle} alt="logo social network" />
        </ListLogo>
      </ContainerLogo>
      <ListLink>
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
      </ListLink>
    </ContainerFooter>
  );
}

Footer.propTypes = {
  logo: PropTypes.string.isRequired,
};
