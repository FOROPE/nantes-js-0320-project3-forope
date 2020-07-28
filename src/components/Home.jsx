import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import Banner from './Banner';
import Questionaire from './Quizz';
import AllArticles from './AllArticles';
import Footer from './Footer';
import AllTestimonies from './AllTestimonies';
import LogoFull from './img/Logo_full.svg';
import logowhite from './img/logowhite.jpg';
import Titles from './Titles';
import Partners from './Partners';
import Data from '../data/data.json';

const HomeContainer = styled.div`
  ${(props) => props.theme.mediaMax.small`
    text-align:center;
  `};
`;

export default function Home() {
  return (
    <HomeContainer>
      <Navigation />
      <Banner logo={LogoFull} />
      <Questionaire />
      <AllArticles
        titlearticle1={Data.home.home.titlearticle1}
        contentarticle1={Data.home.home.contentarticle1}
        titlearticle2={Data.home.home.titlearticle2}
        contentarticle2={Data.home.home.contentarticle2}
        titlearticle3={Data.home.home.titlearticle3}
        contentarticle3={Data.home.home.contentarticle3}
      />
      <Titles text="Ils nous ont fait confiance " signs="!" />
      <Partners />
      <Titles align text="Témoignages" signs="." />
      <AllTestimonies />
      <Footer logo={logowhite} />
    </HomeContainer>
  );
}
