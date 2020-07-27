import React from 'react';
import styled from 'styled-components';
import { Flex } from '../mainStyle';

import Emoji from './Emoji';

const Container = styled(Flex)`
  background-color: #ededed;
  width: 50%;
  padding: 2rem;
  margin: auto;
  font-size: 19px;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const ColumnOne = styled.div`
  align-content: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 1100px) {
    width: 100%;
  }
`;

const ListItem = styled.ul`
  list-style: none;

  @media (max-width: 1100px) {
    padding-left: 0;
  }
`;

const Text = styled.p`
  text-align: center;
`;

const Item = styled.li`
  margin-bottom: 1rem;
`;

const Img = styled.img`
  margin-bottom: 1rem;
`;

export default function Referencing() {
  return (
    <Container>
      <ColumnOne>
        <Img src="https://via.placeholder.com/300x80" alt="logo Forope" />
        <Img src="https://via.placeholder.com/300x80" alt="logo Contructys" />
        <Text>
          Forope est un organisme de formation référencé par Constructys. Pour
          vous, nous nous occupons de tout et vous facilitons la vie
        </Text>
      </ColumnOne>

      <div>
        <ListItem>
          <Item>
            <Emoji symbol="💰" label="Money bag" />
            Prise en charge financière de l’action de formation par votre OPCO
          </Item>
          <Item>
            <Emoji symbol="💼" label="Briefcase" />
            L’ensemble de l’administratif lié à votre formation
          </Item>
          <Item>
            <Emoji symbol="📝" label="Note" />
            Mise en place concrète du planning de formation sur le chantier
          </Item>
        </ListItem>
      </div>
    </Container>
  );
}
