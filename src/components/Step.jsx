import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TitleH3, Flex, TextContent, TitleH4 } from '../mainStyle';

const ContainerStep = styled(Flex)`
  align-items: center;
  width: 25%;
`;

export default function Step({ numberStep, title, body }) {
  return (
    <ContainerStep col>
      <TitleH3>{numberStep}</TitleH3>
      <TitleH4>{title}</TitleH4>
      <TextContent center>{body}</TextContent>
    </ContainerStep>
  );
}

Step.propTypes = {
  title: PropTypes.string.isRequired,
  numberStep: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
