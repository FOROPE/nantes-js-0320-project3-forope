import React from 'react';
import styled from 'styled-components';
import Article from './Article';
import { Flex } from '../mainStyle';

const ContainerAllArticles = styled(Flex)`
  margin: 0 3rem;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default function AllArticles() {
  return (
    <ContainerAllArticles>
      <Article
        title="Première actu."
        content="Viens découvrir tout ce qu’on faire, on est des super champions de la
        formation de formateurs."
        seeMore="En savoir plus"
      />
      <Article
        title="Deuxième actu."
        content="Viens découvrir tout ce qu’on faire, on est des super champions de la
        formation de formateurs."
        seeMore="En savoir plus"
      />
      <Article
        title="Troisième actu."
        content="Viens découvrir tout ce qu’on faire, on est des super champions de la
        formation de formateurs."
        seeMore="En savoir plus"
      />
    </ContainerAllArticles>
  );
}
