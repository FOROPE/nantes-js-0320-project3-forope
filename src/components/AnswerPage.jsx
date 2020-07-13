import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import Navigation from './Navigation';
import BannerTitle from './TitleBanner';
import Form from './Formulaire';
import AllArticles from './AllArticles';
import Footer from './Footer';
import Titles from './Titles';
import Context from './Context';
import Referencing from './Referencing';
import AllSteps from './AllSteps';
import Data from '../data/data.json';

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
  const { interlocutor, theme } = useParams();
  return (
    <>
      <Navigation />
      <BannerTitle
        theme={[interlocutor]}
        title={Data[interlocutor][theme].title}
      />
      <Context
        content1={Data[interlocutor][theme].content1}
        quote1={Data[interlocutor][theme].quote1}
        quote2={Data[interlocutor][theme].quote2}
        quote3={Data[interlocutor][theme].quote3}
      />
      <BannerGrey>
        <BannerPart>{Data[interlocutor][theme].bannergrey1}</BannerPart>
        <BannerPart>{Data[interlocutor][theme].bannergrey2}</BannerPart>
        <BannerPart>{Data[interlocutor][theme].bannergrey3}</BannerPart>
      </BannerGrey>
      <Titles text={Data[interlocutor][theme].second_title} />
      <AllSteps
        titlestep1={Data[interlocutor][theme].titlestep1}
        bodystep1={Data[interlocutor][theme].bodystep1}
        titlestep2={Data[interlocutor][theme].titlestep2}
        bodystep2={Data[interlocutor][theme].bodystep2}
        titlestep3={Data[interlocutor][theme].titlestep3}
        bodystep3={Data[interlocutor][theme].bodystep3}
      />
      <StateInfo>
        <p>{Data[interlocutor][theme].info}</p>
      </StateInfo>
      <BannerOrange>
        <p>{Data[interlocutor][theme].bannerinfo}</p>
      </BannerOrange>
      <Titles align text="Nous contacter" signs="." />
      <Form />
      <Titles text="En +" signs="." />
      <AllArticles
        titlearticle1={Data[interlocutor][theme].titlearticle1}
        contentarticle1={Data[interlocutor][theme].titlearticle1}
        titlearticle2={Data[interlocutor][theme].titlearticle2}
        contentarticle2={Data[interlocutor][theme].titlearticle2}
        titlearticle3={Data[interlocutor][theme].titlearticle3}
        contentarticle3={Data[interlocutor][theme].titlearticle3}
      />
      <Titles align text="Référencement" signs="." />
      <Referencing />
      <Footer />
    </>
  );
}
