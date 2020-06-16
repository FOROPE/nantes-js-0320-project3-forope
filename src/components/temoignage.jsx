import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from '../mainStyle';

const ContainerTestimony = styled(Flex)`
  background-color: ${(props) =>
    props.orange ? props.theme.orange : props.theme.lightGreen};
  margin-left: 3vh;
  padding: 2vh 0 0 2vh;
  width: 37vh;
  height: 30vh;
  text-align: left;
`;
const UserImg = styled.img`
  height: 23%;
`;
const UserText = styled(Flex)`
  color: white;
  margin-right: 5vh;
`;
const TitleText = styled.h3`
  margin-left: 2vh;
  font-weight: normal;
  font-size: 14px;
  width: 80%;
`;
const MainText = styled.p`
  font-size: 12px;
  margin-left: 2vh;
`;

export default function Testimony({ orange, name }) {
  return (
    <ContainerTestimony row orange={orange}>
      <UserImg
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Tramway_de_Qu%C3%A9bec_%281897%29_-_Cercle_blanc.svg/1200px-Tramway_de_Qu%C3%A9bec_%281897%29_-_Cercle_blanc.svg.png"
        alt="coucou"
      />
      <UserText col>
        <TitleText>{name}, 20 ans, RH chez pfizer</TitleText>
        <MainText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          minus, delectus ad illum aliquam iste. Delectus adipisci ut ratione!
          Harum dolorem inventore qui? Quibusdam accusantium illo quisquam quod
          eveniet rem?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Libero minus, delectus ad illum aliquam iste.
        </MainText>
      </UserText>
    </ContainerTestimony>
  );
}

Testimony.propTypes = {
  orange: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
