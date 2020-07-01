import React from 'react';
import styled from 'styled-components';
import Article from './Article';
import { Flex } from '../mainStyle';

const ContainerArticle = styled(Flex)`
  margin-top: 2rem;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default function AllArticles() {
  return (
    <ContainerArticle>
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
    </ContainerArticle>
  );
}
