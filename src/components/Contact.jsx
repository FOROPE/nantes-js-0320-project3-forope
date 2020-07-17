import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import Banner from './Banner';
import LogoFull from './img/Logo_full.svg';
import Form from './Formulaire';
import Footer from './Footer';
import { Flex } from '../mainStyle';

const ContainerInfo = styled(Flex)`
  font-size: 19px;
  margin: 2rem;
`;
export default function Contact() {
  return (
    <>
      <Navigation />
      <Banner logo={LogoFull} />
      <ContainerInfo col alignc>
        <p>15 rue de Forope, 44000 Nantes</p>
        <p>02 40 30 30 30</p>
      </ContainerInfo>
      <Form />
      <Footer />
    </>
  );
}
