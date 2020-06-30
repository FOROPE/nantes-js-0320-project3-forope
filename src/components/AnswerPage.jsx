import React from 'react';
import Navigation from './Navigation';
import Banner from './Banner';
import Form from './Formulaire';
import AllArticles from './AllArticles';
import Footer from './Footer';
import Content from './Content';
import Titles from './Titles';
import Referencing from './Referencing';

export default function AnswerPage() {
  return (
    <>
      <Navigation />
      <Banner
        title="Forope."
        subtitle="Lorem ipsum dolor sit amet, consecteconsecte- tuer adipiscing elit."
      />
      <Titles text="Contenu" signs="." />
      <Content />
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
