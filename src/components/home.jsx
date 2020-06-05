import React from 'react';
import Navigation from './navigation';
import BandeauTitre from './bandeauTitre';
import Questionaire from './questionaire';

export default function Home() {
  return (
    <div>
      <Navigation />
      <BandeauTitre />
      <Questionaire />
    </div>
  );
}
