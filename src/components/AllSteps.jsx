import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Step from './Step';
import { Flex } from '../mainStyle';

const ContainerAllSteps = styled(Flex)`
  justify-content: space-evenly;
  flex-wrap: wrap;

  ${(props) => props.theme.mediaMax.normal`
   margin: 0rem;
    width: 100%;
  `};
`;

export default function AllSteps({
  titlestep1,
  titlestep2,
  titlestep3,
  bodystep1,
  bodystep2,
  bodystep3,
}) {
  return (
    <ContainerAllSteps>
      <Step numberStep="1" title={titlestep1} body={bodystep1} />
      <Step numberStep="2" title={titlestep2} body={bodystep2} />
      <Step numberStep="3" title={titlestep3} body={bodystep3} />
    </ContainerAllSteps>
  );
}

AllSteps.propTypes = {
  titlestep1: PropTypes.string.isRequired,
  titlestep2: PropTypes.string.isRequired,
  titlestep3: PropTypes.string.isRequired,
  bodystep1: PropTypes.string.isRequired,
  bodystep2: PropTypes.string.isRequired,
  bodystep3: PropTypes.string.isRequired,
};
