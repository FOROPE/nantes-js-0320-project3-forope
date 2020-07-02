import React from 'react';
import styled from 'styled-components';
import Step from './Step';
import { Flex } from '../mainStyle';

const ContainerAllSteps = styled(Flex)`
  justify-content: space-evenly;
  width: 80%;
  margin: 0 9rem;
  flex-wrap: wrap;
`;

export default function AllSteps() {
  return (
    <ContainerAllSteps>
      <Step
        numberStep="1"
        title="Préparation"
        body="Se rencontrer pour : réaliser le diagnostic
terrain et les interviews, débriefer avec les
acteurs du projet pour identifier les projets
pilotes, organiser la démarche d’accompa-
gnement."
      />
      <Step
        numberStep="2"
        title="Formation"
        body="Former au TWI pour : valoriser les savoir-faire internes Créer les contenus de
        formation avec les experts métiers, apprendre à former avec méthode."
      />
      <Step
        numberStep="3"
        title="Accompagnement"
        body="Superviser pour : lever les freins et obtenir des résultats, ancrer durablement les bonnes pratiques, ajuster et vous mettre en autonomie sur le TWI"
      />
    </ContainerAllSteps>
  );
}
