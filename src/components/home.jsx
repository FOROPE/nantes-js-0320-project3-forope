import React from 'react';
import Navigation from './navigation';
import BandeauTitre from './bandeauTitre';
import Questionaire from './questionaire';
import Article from './article';
import AllTestimonies from './allTemoignages';

export default function Home() {
  return (
    <>
      <Navigation />
      <BandeauTitre />
      <Questionaire />
      <Article />
      <AllTestimonies />
    </>
  );
}
