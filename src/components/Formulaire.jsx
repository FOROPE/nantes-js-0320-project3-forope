import React from 'react';
import styled from 'styled-components';
import { Flex, TextContent, InputForm } from '../mainStyle';

const FormContainer = styled(Flex)`
  margin: auto;
  width: 50%;
  padding: 1rem 4rem 1rem 4rem;
  background-color: ${(props) => props.theme.orange};
  color: white;
`;

const TitlesFormContainer = styled(Flex)`
  align-items: start;
  width: 50%;
`;

const TitleForm = styled.h3`
  font-size: 24px;
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
  width: 100%;
  margin-right: 4rem;
  justify-content: space-between;
`;

const AllInputs = styled(Flex)`
  width: 40%;
  justify-content: flex-start;
`;

const OneInput = styled(InputForm)`
  box-sizing: border-box;
`;

const ButtonForm = styled.button`
  max-width: 6rem;
  padding: 0.5rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
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
            <ButtonForm type="button">Etre rappelé</ButtonForm>
          </AllInputs>
          <AllInputs col>
            <OneInput type="text" name="firstname" placeholder="Prénom" />
            <OneInput type="tel" name="phone" placeholder="Téléphone" />
          </AllInputs>
        </InputsContainer>
      </FormContainer>
    </>
  );
}
