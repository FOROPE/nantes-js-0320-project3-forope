import React from 'react';
import styled from 'styled-components';


import { Flex, Content, Punctuation, Italic, Subtitle } from '../mainStyle';


const PartTitle = styled.h3`
  color: ${(props) => props.theme.mediumGreen};
  font-size: 24px;
`;

const TitleContext = styled.h2`
  font-size: 28px;
  color: ${(props) => props.theme.mediumGreen};
  margin: 3rem 6rem;
`;

const ContainerFlex = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

export default function Context() {
  return (
    <>
      <TitleContext>
        La transmission des savoir-faire : un défi concret !
      </TitleContext>
      <Content>
        <ContainerFlex col>
          <Flex col>
            <PartTitle>
              La transmission des savoir-faire : un défi concret !
            </PartTitle>
            <Subtitle>
              Pour répondre aux besoins de leurs clients, 200.000 entreprises du
              BTP vont devoir
              <Punctuation>anticiper les départs à la retraite </Punctuation>des
              collaborateurs en structurant le transfert des compétences et
              <Punctuation>former efficacement </Punctuation>les nouveaux
              embauchés
            </Subtitle>
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
        </ContainerFlex>
        <ContainerFlex col>
          <img src="https://via.placeholder.com/200" alt="illustration" />
        </ContainerFlex>
      </Content>
    </>
  );
}
