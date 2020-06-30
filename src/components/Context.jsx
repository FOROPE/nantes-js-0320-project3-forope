import React from 'react';

import { Flex, TitleH2, Content } from '../mainStyle';

export default function Context() {
  return (
    <>
      <TitleH2>La transmission des savoir-faire : un défi concret !</TitleH2>
      <Content>
        <Flex col>
          <Flex col>
            <h2>La transmission des savoir-faire : un défi concret !</h2>
            <p>
              Pour répondre aux besoins de leurs clients, 200.000 entreprises du
              BTP vont devoir anticiper les départs à la retraite des
              collaborateurs en structurant le transfert des compétences et
              former efficacement les nouveaux embauchés
            </p>
          </Flex>
          <Flex col>
            <p>
              “La moitié des nouveaux entrants n’ont jamais travaillé dans le
              BTP”
            </p>
            <p>
              “¼ des ouvriers du bâtiment seront à la retraite d’ici 10 ans”
            </p>
            <p>Observatoire des métiers du BTP, 2018</p>
          </Flex>
        </Flex>
        <Flex col>
          <Flex col>
            <h2>Un financement ?</h2>
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
            <h2>L’action Forope</h2>
            <p>
              - Développer rapidement et efficacement la transmission des
              savoir-faire - Vous rendre autonome en 1 semaine et structurer vos
              formations chantier - On axe votre plan de formation sur la
              formation métier car c’est votre besoin
            </p>
          </Flex>
        </Flex>
      </Content>
    </>
  );
}
