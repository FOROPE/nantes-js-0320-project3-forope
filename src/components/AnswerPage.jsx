import React from 'react';
import Navigation from './Navigation';
import Banner from './Banner';
import Form from './Formulaire';
import AllArticles from './AllArticles';
import Footer from './Footer';
import Titles from './Titles';
import AllSteps from './AllSteps';

export default function AnswerPage() {
  return (
    <>
      <Navigation />
      <Banner
        title="Forope."
        subtitle="Lorem ipsum dolor sit amet, consecteconsecte- tuer adipiscing elit."
      />
      <Titles text="Comment ça fonctionne" signs=" !" />
      <AllSteps />
      <Titles align text="Nous contacter" signs="." />
      <Form />
      <Titles text="En +" signs="." />
      <AllArticles />
      <Footer />
    </>
  );
}
