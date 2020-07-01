import React from 'react';
import styled from 'styled-components';

import { Flex, Content, Punctuation, Italic } from '../mainStyle';

const PartTitle = styled.h3`
  color: ${(props) => props.theme.mediumGreen};
`;

const TtileContext = styled.h2`
  font-size: 28px;
  color: ${(props) => props.theme.mediumGreen};
  margin: 3rem 6rem;
`;

export default function Context() {
  return (
    <>
      <TtileContext>
        La transmission des savoir-faire : un défi concret !
      </TtileContext>
      <Content>
        <Flex col>
          <Flex col>
            <PartTitle>
              La transmission des savoir-faire : un défi concret !
            </PartTitle>
            <p>
              Pour répondre aux besoins de leurs clients, 200.000 entreprises du
              BTP vont devoir{' '}
              <Punctuation>anticiper les départs à la retraite </Punctuation>des
              collaborateurs en structurant le transfert des compétences et
              <Punctuation>former efficacement </Punctuation>les nouveaux
              embauchés
            </p>
          </Flex>
          <Flex col>
            <Italic>
              “La moitié des nouveaux entrants n’ont jamais travaillé dans le
              BTP”
            </Italic>
            <Italic>
              “¼ des ouvriers du bâtiment seront à la retraite d’ici 10 ans”
            </Italic>
            <Italic>Observatoire des métiers du BTP, 2018</Italic>
          </Flex>
        </Flex>
        <Flex col>
          <Flex col>
            <PartTitle>Un financement ?</PartTitle>
            <p>
              L’état Français, accompagne les entreprises qui souhaitent
              maintenir leur niveau d’excellence et mise sur l’AFEST (Action de
              Formation En Situation de Travail) pour la transmission des
              savoir-faire. Le 5 septembre 2018, la loi pour “la liberté de
              choisir son avenir professionnel” définit la formation chantier
              comme action de formation à part entière.
            </p>
          </Flex>
          <Flex col>
            <PartTitle>L’action Forope</PartTitle>
            <p>
              - Développer rapidement et efficacement la transmission des
              savoir-faire - Vous rendre autonome en{' '}
              <Punctuation>1 semaine </Punctuation>et structurer vos formations
              chantier - On axe votre plan de formation sur la formation métier
              car c’est votre besoin
            </p>
          </Flex>
        </Flex>
      </Content>
    </>
  );
}
