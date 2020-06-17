import React from 'react';
import Navigation from './Navigation';
import Banner from './Banner';
import AllArticles from './AllArticles';
import Footer from './Footer';
import Content from './Content';

export default function AnswerPage() {
  return (
    <>
      <Navigation />
      <Banner
        title="Forope."
        subtitle="Lorem ipsum dolor sit amet, consecteconsecte- tuer adipiscing elit."
      />
      <Content />
      <AllArticles />
      <Footer />
    </>
  );
}
