import React from 'react';
import Navigation from './navigation';
import BandeauTitre from './bandeauTitre';
import Questionaire from './questionaire';
import AllArticles from './allArticles';

export default function Home() {
  return (
    <div>
      <Navigation />
      <BandeauTitre />
      <Questionaire />
      <AllArticles />
    </div>
  );
}
