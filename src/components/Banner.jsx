import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ContainerBanner, Flex } from '../mainStyle';
import Questionaire from './Quizz';

const TitlesBanner = styled(Flex)`
  justify-content: center;
  align-items: center;
`;

const LogoHome = styled.img`
  height: 19%;
  position: absolute;
  top: 15%;
  right: 9%;
`;

export default function Banner({ logo }) {
  return (
    <ContainerBanner center>
      <TitlesBanner col>
        <Questionaire />
        <LogoHome src={logo} alt="Forope logo" />
      </TitlesBanner>
    </ContainerBanner>
  );
}

Banner.propTypes = {
  logo: PropTypes.string.isRequired,
};
