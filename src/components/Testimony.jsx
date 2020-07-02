import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from '../mainStyle';

const ContainerTestimony = styled(Flex)`
  background-color: ${(props) =>
    props.orange ? props.theme.orange : props.theme.lightGreen};
  text-align: left;
  color: white;
  padding: 1rem;
  width: 20rem;
`;

const ContainerTop = styled(Flex)`
  align-items: center;
`;
const UserImg = styled.img`
  height: 2.6rem;
`;
const TitleText = styled.h3`
  font-weight: normal;
  font-size: 19px;
  padding-left: 1rem;
`;
const MainText = styled.p`
  font-size: 14px;
  margin-left: 5rem;
`;

export default function Testimony({ orange, name, content }) {
  return (
    <ContainerTestimony col orange={orange}>
      <ContainerTop>
        <UserImg
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Tramway_de_Qu%C3%A9bec_%281897%29_-_Cercle_blanc.svg/1200px-Tramway_de_Qu%C3%A9bec_%281897%29_-_Cercle_blanc.svg.png"
          alt="placeholder avatar user"
        />
        <TitleText>{name}</TitleText>
      </ContainerTop>
      <MainText>{content}</MainText>
    </ContainerTestimony>
  );
}

Testimony.propTypes = {
  orange: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
