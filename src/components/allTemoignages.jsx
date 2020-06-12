import React from 'react';
import styled from 'styled-components';
import Testimony from './temoignage';
import { Flex } from '../mainStyle';

const ContainerTestimonies = styled(Flex)`
  justify-content: space-evenly;
`;
export default function AllTestimonies() {
  return (
    <ContainerTestimonies row>
      <Testimony />
      <Testimony />
      <Testimony />
      <Testimony />
    </ContainerTestimonies>
  );
}
