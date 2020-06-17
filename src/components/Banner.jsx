import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ContainerBanner, Flex } from '../mainStyle';

const TitlesBanner = styled(Flex)`
  justify-content: center;
  height: 100%;
  align-items: center;
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
export default function Banner({ title, subtitle }) {
  return (
    <ContainerBanner center>
      <TitlesBanner col>
        <TitleBanner>{title}</TitleBanner>
        <SubtitleBanner>{subtitle}</SubtitleBanner>
      </TitlesBanner>
    </ContainerBanner>
  );
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
