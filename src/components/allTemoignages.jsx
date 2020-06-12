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
      <Testimony name="John Doe" orange />
      <Testimony name="Pascal Gentil" />
      <Testimony name="François Damiens" orange />
      <Testimony name="Juste Leblanc" />
    </ContainerTestimonies>
  );
}
