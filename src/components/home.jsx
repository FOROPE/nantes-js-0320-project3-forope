import React from 'react';
import Navigation from './navigation';
import BandeauTitre from './bandeauTitre';
import Questionaire from './questionaire';
import Article from './article';

export default function Home() {
  return (
    <div>
      <Navigation />
      <BandeauTitre />
      <Questionaire />
      <Article />
    </div>
  );
}
