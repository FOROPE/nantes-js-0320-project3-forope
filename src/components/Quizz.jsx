import React, { useState } from 'react';
import styled from 'styled-components';
import Btn from './Button';
import { TitleH2, Flex, Punctuation, Subtitle } from '../mainStyle';
import Persos from './img/persos_quizz.svg';

const ZoneContainer = styled(Flex)`
  width: 80%;
  margin: 0 9rem 2rem 9rem;
  padding-top: 2rem;
  ${(props) => props.theme.mediaMax.small`
    align-items:center;
    margin:0;

    width:100%;
    justify-content:center;
  `};
`;

const QuizzContainer = styled(Flex)`
  text-align: left;
  width: 40%;
  ${(props) => props.theme.mediaMax.small`
    width:90%;
    text-align:center;
    align-items: center;
  `};
`;

const Label = styled.label`
  margin-bottom: 1rem;
  font-size: 19px;
  ${(props) => props.theme.mediaMax.small`
    text-align: left;
  `};

  .persona-selection {
    border: none;
    background: none;
    border-bottom: 2px solid ${(props) => props.theme.orange};
    outline: 0;
    padding-bottom: 0.2rem;
    color: ${(props) => props.theme.orange};
  }
`;

const QuoteQuizz = styled.p`
  font-size: 1.5em;
  margin-bottom: 0;
`;

const ContentQuizz = styled.p`
  margin-top: 0.3em;
  width: 70%;
  font-size: 19px;
  ${(props) => props.theme.mediaMax.small`
    width:100%;
  `};
`;

const QuizzIllustration = styled.img`
  height: 400px;
  margin-right: 4rem;
  ${(props) => props.theme.mediaMax.small`
    display:none;
  `};
`;

const ContainerAnswer = styled.div`
  ${(props) => props.theme.mediaMax.small`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`}
`;

const SelectItem = styled.select`
  font-size: 19px;
`;
export default function Questionaire() {
  const [YouAre, setYouAre] = useState();
  const [YouWant, setYouWant] = useState();

  const handleChange = (event) => {
    setYouAre(event.target.value);
  };

  const handleChangeManager = (event) => {
    setYouWant(event.target.value);
  };

  return (
    <ZoneContainer btw>
      <QuizzContainer col>
        <TitleH2 quizz>
          Comment pouvons-nous vous aider <Punctuation>?</Punctuation>
        </TitleH2>
        <Subtitle>
          Pour vous présenter l&apos;offre Forope adaptée à vos besoins, on a
          besoin d&apos;en savoir un tout petit peu plus !
        </Subtitle>
        <Label htmlFor="persona-selection">
          Vous êtes :
          <SelectItem
            type="select"
            name="personas"
            id="persona-selection"
            className="persona-selection"
            onChange={handleChange}
          >
            <option value="">--Please choose an option--</option>
            <option value="dirigeant">Dirigeant</option>
            <option value="rh">RH/Formation</option>
            <option value="operations">Opérations</option>
            <option value="particulier">Particulier</option>
          </SelectItem>
        </Label>

        {YouAre === 'dirigeant' && (
          <>
            <Label htmlFor="secondchoice">
              Vous voulez :
              <SelectItem
                name="personas"
                id="secondchoice"
                className="persona-selection"
                onChange={handleChangeManager}
              >
                <option value="">--Please choose an option--</option>
                <option value="cultureperformance">
                  Développer la culture de la performance
                </option>
                <option value="adopterledigital">
                  Faire adopter le digital
                </option>
                <option value="innovations">
                  Accélérer la mise en place des innovations
                </option>
                <option value="cultureenvironnementale">
                  Développer la culture environnementale
                </option>
              </SelectItem>
            </Label>
          </>
        )}

        {YouAre === 'rh' && (
          <>
            <Label htmlFor="secondchoice">
              Vous voulez :
              <SelectItem
                name="personas"
                id="persona-selection"
                className="persona-selection"
                onChange={handleChangeManager}
              >
                <option value="">--Please choose an option--</option>
                <option value="formationmanagement">
                  Encadrants - Formation management
                </option>
                <option value="afest">
                  Techniciens - Formation en situation de travail - AFEST
                </option>
                <option value="piloteexpérimentation">
                  RH/Formation - Pilote expérimentation AFEST
                </option>
                <option value="habilitations">
                  Formation obligatoire - Habilitations
                </option>
              </SelectItem>
            </Label>
          </>
        )}

        {YouAre === 'operations' && (
          <>
            <Label htmlFor="secondchoice">
              Vous voulez :
              <SelectItem
                name="personas"
                id="persona-selection"
                className="persona-selection"
                onChange={handleChangeManager}
              >
                <option value="">--Please choose an option--</option>
                <option value="formeraumetier">
                  Former aux fondamentaux du métier
                </option>
                <option value="fidéliser">Fidéliser ses collaborateurs</option>
                <option value="securitesante">
                  Garantir la sécurité et la santé de ses collaborateurs
                </option>
              </SelectItem>
            </Label>
          </>
        )}

        {YouAre === 'particulier' && (
          <>
            <Label htmlFor="secondchoice">
              Vous voulez :
              <SelectItem
                name="personas"
                id="persona-selection"
                className="persona-selection"
                onChange={handleChangeManager}
              >
                <option value="">--Please choose an option--</option>
                <option value="formation-cpf">Formation CPF</option>
              </SelectItem>
            </Label>
          </>
        )}

        {YouWant && (
          <ContainerAnswer>
            <QuoteQuizz>Super, nous pouvons vous aider !</QuoteQuizz>
            <ContentQuizz>
              Viens découvrir tout ce qu’on faire, on est des super champions de
              la formation de formateurs.
            </ContentQuizz>
            <Btn quizz seeMore="Découvrir" link={`${YouAre}/${YouWant}`} />
          </ContainerAnswer>
        )}
      </QuizzContainer>

      <QuizzIllustration src={Persos} alt="illustration du sujet" />
    </ZoneContainer>
  );
}
