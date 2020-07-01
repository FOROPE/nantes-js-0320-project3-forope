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

const SubtitleBanner = styled.p`
  width: 40%;
  text-align: left;
  align-self: flex-end;
  margin: 0;
`;

const TitleBanner = styled.h1`
  font-size: 5rem;
  margin-bottom: 1rem;
  text-decoration: underline;
`;

const BackgroundBanner = styled.img`
  height: 160%;
  object-fit: cover;
  box-sizing: border-box;
  position: relative;
  right: -30rem;
  z-index: -1000;
`;

export default function BannerTitle({ title, subtitle }) {
  return (
    <ContainerBanner center>
      <TitlesBanner col>
        <TitleBanner>{title}</TitleBanner>
        <SubtitleBanner>{subtitle}</SubtitleBanner>
      </TitlesBanner>
      <BackgroundBanner src={truck} alt="bg" />
    </ContainerBanner>
  );
}

BannerTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
