import React from 'react';
import Navigation from './Navigation';
import Banner from './Banner';
import Questionaire from './Quizz';
import AllArticles from './AllArticles';
import Footer from './Footer';
import AllTestimonies from './AllTestimonies';
import Form from './Formulaire';

export default function Home() {
  return (
    <>
      <Navigation />
      <Banner
        title="Forope."
        subtitle="Lorem ipsum dolor sit amet, consecteconsecte- tuer adipiscing elit."
      />
      <Questionaire />
      <AllArticles />
      <AllTestimonies />
      <Form />
      <Footer />
    </>
  );
}
