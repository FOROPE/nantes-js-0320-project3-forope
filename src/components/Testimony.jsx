import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from '../mainStyle';

const ContainerTestimony = styled(Flex)`
  background-color: ${(props) =>
    props.orange ? props.theme.orange : props.theme.lightGreen};
  margin-left: 2rem;
  padding: 1rem 0 0 1rem;
  width: 37vh;
  height: 30vh;
  text-align: left;
`;
const UserImg = styled.img`
  height: 7vh;
`;
const UserText = styled(Flex)`
  color: white;
  margin-right: 2rem;
`;
const TitleText = styled.h3`
  margin-left: 1rem;
  font-weight: normal;
  font-size: 0.9rem;
  width: 80%;
`;
const MainText = styled.p`
  font-size: 0.75rem;
  margin-left: 1rem;
`;

export default function Testimony({ orange, name, content }) {
  return (
    <ContainerTestimony row orange={orange}>
      <UserImg
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Tramway_de_Qu%C3%A9bec_%281897%29_-_Cercle_blanc.svg/1200px-Tramway_de_Qu%C3%A9bec_%281897%29_-_Cercle_blanc.svg.png"
        alt="coucou"
      />
      <UserText col>
        <TitleText>{name}</TitleText>
        <MainText>{content}</MainText>
      </UserText>
    </ContainerTestimony>
  );
}

Testimony.propTypes = {
  orange: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
