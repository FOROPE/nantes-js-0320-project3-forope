import React from 'react';
import styled from 'styled-components';
import Testimony from './Testimony';
import { Flex } from '../mainStyle';

const ContainerTestimonies = styled(Flex)`
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 0 3rem;
`;
export default function AllTestimonies() {
  return (
    <ContainerTestimonies row>
      <Testimony
        name="John Doe, 20 ans, RH chez pfizer"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          minus, delectus ad illum aliquam iste. Delectus adipisci ut ratione!
          Harum dolorem inventore qui? Quibusdam accusantium illo quisquam quod
          eveniet rem?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Libero minus, delectus ad illum aliquam iste."
        orange
      />
      <Testimony
        name="Pascal Gentil, 20 ans, RH chez pfizer"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          minus, delectus ad illum aliquam iste. Delectus adipisci ut ratione!
          Harum dolorem inventore qui? Quibusdam accusantium illo quisquam quod
          eveniet rem?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Libero minus, delectus ad illum aliquam iste."
      />
      <Testimony
        name="François Damiens, 20 ans, RH chez pfizer"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          minus, delectus ad illum aliquam iste. Delectus adipisci ut ratione!
          Harum dolorem inventore qui? Quibusdam accusantium illo quisquam quod
          eveniet rem?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Libero minus, delectus ad illum aliquam iste."
        orange
      />
      <Testimony
        name="Juste Leblanc, 20 ans, RH chez pfizer"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          minus, delectus ad illum aliquam iste. Delectus adipisci ut ratione!
          Harum dolorem inventore qui? Quibusdam accusantium illo quisquam quod
          eveniet rem?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Libero minus, delectus ad illum aliquam iste."
      />
    </ContainerTestimonies>
  );
}
