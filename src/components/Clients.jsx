import React from 'react';
import styled from 'styled-components';
import { Flex } from '../mainStyle';

const ClientContainer = styled(Flex)`
  margin: 1rem 9rem;
  justify-content: center;
`;

const ClientText = styled.div`
  width: 30%;
  padding-right: 10rem;
  text-align: left;
  font-size: 19px;
`;

const Logos = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const Logo = styled.img`
  padding: 0 1rem 1rem 0;
  height: 80px;
`;

export default function Clients() {
  return (
    <ClientContainer>
      <ClientText>
        Pour vous présenter loffre Alan adaptée à vos besoins, on a besoin den
        savoir un tout petit peu plus ! Toutes ces entreprises nous ont fait
        confiance. HE HE, on se la raconte, pourquoi pas vous, vous ne serez pas
        déçu. lov keur, on voublas aime. Pour vous présenter loffre Alan adaptée
        à vos besoins, on a besoin den savoir un tout petit peu plus ! Toutes
        ces entreprises nous ont fait confiance. HE HE, on se la raconte,
        pourquoi pas vous, vous ne serez pas déçu. lov keur, on vous aime.
      </ClientText>
      <Logos>
        <Logo src="https://via.placeholder.com/100" alt="placeholder" />
        <Logo src="https://via.placeholder.com/100" alt="placeholder" />
        <Logo src="https://via.placeholder.com/100" alt="placeholder" />
        <Logo src="https://via.placeholder.com/100" alt="placeholder" />
        <Logo src="https://via.placeholder.com/100" alt="placeholder" />
        <Logo src="https://via.placeholder.com/100" alt="placeholder" />
        <Logo src="https://via.placeholder.com/100" alt="placeholder" />
      </Logos>
    </ClientContainer>
  );
}
