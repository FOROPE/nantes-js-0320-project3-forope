import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Flex, InputForm } from '../../mainStyle';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 20%;
`;

export default function LoginBO() {
  return (
    <Flex col center alignc full>
      <FormContainer>
        <label htmlFor="Identifiant">
          Identifiant
          <InputForm type="text" name="Identifiant" id="Identifiant" />
        </label>
        <label htmlFor="Mot de passe">
          Mot de passe
          <InputForm type="text" name="Mot de passe" id="Mot de passe" />
        </label>
        <Link to="/dashboard">
          <button type="button">etzéparti</button>
        </Link>
      </FormContainer>
    </Flex>
  );
}
