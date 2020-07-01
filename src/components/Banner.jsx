import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ContainerBanner, Flex } from '../mainStyle';
import truck from './img/truck2.png';

const TitlesBanner = styled(Flex)`
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const BackgroundBanner = styled.img`
  height: 160%;
  object-fit: cover;
  box-sizing: border-box;
  position: relative;
  left: 30rem;
  z-index: -1000;
`;

const LogoHome = styled.img`
  height: 150px;
`;

export default function Banner({ logo }) {
  return (
    <ContainerBanner center>
      <TitlesBanner col>
        <LogoHome src={logo} alt="Forope logo" />
      </TitlesBanner>
      <BackgroundBanner src={truck} alt="bg" />
    </ContainerBanner>
  );
}

Banner.propTypes = {
  logo: PropTypes.string.isRequired,
};
