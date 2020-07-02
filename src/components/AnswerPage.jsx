import React from 'react';
import Navigation from './Navigation';
import BannerTitle from './TitleBanner';
import Form from './Formulaire';
import AllArticles from './AllArticles';
import Footer from './Footer';
import Titles from './Titles';
import Context from './Context';
import Referencing from './Referencing';
import AllSteps from './AllSteps';

export default function AnswerPage() {
  return (
    <>
      <Navigation />
      <BannerTitle
        theme="Dirigeant"
        title="L'organisme de formation qui structure la transmission des savoir-faire dans votre entreprise."
        subtitle='Avec Forop, on valorise les bonnes pratiques en interne et on structure le contenu des formations sur le "travail bien fait"'
      />
      <Context />
      <Titles text="Comment ça fonctionne" signs=" !" />
      <AllSteps />
      <Titles align text="Nous contacter" signs="." />
      <Form />
      <Titles text="En +" signs="." />
      <AllArticles />
      <Titles align text="Référencement" signs="." />
      <Referencing />
      <Footer />
    </>
  );
}
