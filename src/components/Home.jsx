import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import Banner from './Banner';
import AllArticles from './AllArticles';
import Footer from './Footer';
import AllTestimonies from './AllTestimonies';
import Clients from './Clients';
import LogoFull from './img/Logo_full.svg';
import logowhite from './img/logowhite.jpg';
import Titles from './Titles';
import truck from './img/truck2.png';

const Container = styled.div`
  background: grey;
`;

const ViewContainer = styled.div`
  margin: 3rem 0;
`;

const ViewContainerSmall = styled.div`
  padding: 5rem 0;
`;

const GreenContainer = styled(ViewContainerSmall)`
  background: cadetblue;
  padding: 3rem 0;
`;

const WhiteContainer = styled(ViewContainer)`
  margin: 0 0 7rem;
`;

const BackgroundBanner = styled.img`
  position: relative;
  left: 60rem;
  width: 20%;
  bottom: 0;
`;

export default function Home() {
  return (
    <>
      <Navigation />
      <Container>
        <Banner logo={LogoFull} />
      </Container>
      <ViewContainerSmall>
        <AllArticles />
      </ViewContainerSmall>
      <GreenContainer>
        <Titles text="Ils nous ont fait confiance " signs="!" />
        <Clients />
        <BackgroundBanner src={truck} alt="bg" />
      </GreenContainer>
      <WhiteContainer>
        <Titles align text="Témoignages" signs="." />
        <AllTestimonies />
      </WhiteContainer>
      <Footer logo={logowhite} />
    </>
  );
}
