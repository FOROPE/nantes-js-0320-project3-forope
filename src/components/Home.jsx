import React from 'react';
import Navigation from './Navigation';
import Banner from './Banner';
import Questionaire from './Quizz';
import AllArticles from './AllArticles';
import Footer from './Footer';
import AllTestimonies from './AllTestimonies';
import Clients from './Clients';
import LogoFull from './img/Logo_full.svg';

export default function Home() {
  return (
    <>
      <Navigation />
      <Banner logo={LogoFull} />
      <Questionaire />
      <AllArticles />
      <Clients />
      <AllTestimonies />
      <Footer />
    </>
  );
}
