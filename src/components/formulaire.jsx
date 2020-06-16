import React from 'react';
import styled from 'styled-components';
import { Flex, TextContent, InputForm } from '../mainStyle';

const FormContainer = styled(Flex)`
  margin: auto;
  width: 50%;
  padding: 2vh 6vh 2vh 6vh;
  background-color: ${(props) => props.theme.orange};
  color: white;
`;

const TitlesFormContainer = styled(Flex)`
  align-items: start;
  width: 30%;
`;

const TitleForm = styled.h3`
  font-size: 1.5em;
  font-weight: normal;
  margin-bottom: 0;
  text-transform: uppercase;
`;

const MainText = styled(TextContent)`
  text-align: left;
  margin-left: 0;
  margin-top: 0;
`;

const InputsContainer = styled(Flex)`
  width: 90%;
  margin-right: 8vh;
`;

const AllInputs = styled(Flex)`
  width: 40%;
  justify-content: flex-start;
  margin-right: 10vh;
`;

const OneInput = styled(InputForm)``;

const SelectForm = styled.select`
  width: 100%;
  padding: 1vh;
`;

const ButtonForm = styled.button`
  width: 50%;
  padding: 1vh;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3vh;
  text-transform: uppercase;
  background-color: white;
  border-style: double;
  border-color: white;
`;

export default function Form() {
  return (
    <>
      <FormContainer col>
        <TitlesFormContainer col>
          <TitleForm>Etre rappelé</TitleForm>
          <MainText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id atque
            voluptatem repellat non dignissimos ullam pariatur.
          </MainText>
        </TitlesFormContainer>
        <InputsContainer>
          <AllInputs col>
            <OneInput type="text" name="lastname" placeholder="Nom" />
            <OneInput type="text" name="companby" placeholder="Entreprise" />
            <OneInput type="email" name="email" placeholder="Email" />
            <SelectForm name="motif" placeholder="Motif">
              <option value="Motif">Motif</option>
              <option value="informations">Informations au sujet de...</option>
              <option value="tarif">A propos des tarifs</option>
            </SelectForm>
            <ButtonForm type="button">Etre rappelé</ButtonForm>
          </AllInputs>
          <AllInputs col>
            <OneInput type="text" name="firstname" placeholder="Prénom" />
            <OneInput type="text" name="function" placeholder="Fonction" />
            <OneInput type="tel" name="phone" placeholder="Téléphone" />
          </AllInputs>
        </InputsContainer>
      </FormContainer>
    </>
  );
}
