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
        title="Forope."
        subtitle="Lorem ipsum dolor sit amet, consecteconsecte- tuer adipiscing elit."
      />
      <Titles text="Contenu" signs="." />
      <Content />
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
