import React from 'react';
import Navigation from './navigation';
import BandeauTitre from './bandeauTitre';
import Questionaire from './questionaire';
import AllArticles from './allArticles';
import Footer from './footer';

export default function Home() {
  return (
    <div>
      <Navigation />
      <BandeauTitre />
      <Questionaire />
      <AllArticles />
      <Footer />
    </div>
  );
}
