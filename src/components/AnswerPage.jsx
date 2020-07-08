import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import BannerTitle from './TitleBanner';
import Form from './Formulaire';
import AllArticles from './AllArticles';
import Footer from './Footer';
import Titles from './Titles';
import Context from './Context';
import Referencing from './Referencing';
import AllSteps from './AllSteps';

const BannerGrey = styled.div`
  background: #f4f4f4;
  display: flex;
  justify-content: space-between;
  padding: 5rem 9rem;
`;

const BannerPart = styled.div`
  width: 25%;
`;

const BannerOrange = styled.div`
  background: linear-gradient(
    90deg,
    rgba(244, 164, 6, 1) 0%,
    rgba(236, 125, 6, 1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 9rem;
  font-size: 30px;
  color: white;
`;

const StateInfo = styled.div`
  display: flex;
  margin: 4rem 30rem;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

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
      <BannerGrey>
        <BannerPart>
          L&apos;action Forope Développer rapidement et efficacement la
          transmission des savoir-faire
        </BannerPart>
        <BannerPart>
          Notre méthode Vous rendre autonome en 1 semaine et structurer vos
          formations chantier
        </BannerPart>
        <BannerPart>
          Pour vous On axe votre plan de formation sur la formation métier car
          c&apos;est votre besoin
        </BannerPart>
      </BannerGrey>
      <Titles text="Comment ça fonctionne" signs=" !" />
      <AllSteps />
      <StateInfo>
        <p>L&apos;état Français, accompagne les entreprises</p>
        <p>
          qui souhaitent maintenir leur niveau d&apos;excellence et mise sur
          l&apos;AFEST (Action de Formation En Situation de Travail) pour la
          transmission des savoir-faire Le 5 septembre 2018, la loi pour “la
          liberté de choisir son avenir professionnel” définit la formation
          chantier comme action de formation à part entière.
        </p>
      </StateInfo>
      <BannerOrange>
        <p>Développer la culture de la performance avec le TWI en 1 semaine</p>
      </BannerOrange>
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
