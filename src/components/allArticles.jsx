import React from 'react';
import styled from 'styled-components';
import Article from './article';
import { Flex } from '../mainStyle';

const ContainerArticle = styled(Flex)`
  margin-top: 3vh;
  justify-content: center;
`;

export default function AllArticles() {
  return (
    <ContainerArticle>
      <Article />
      <Article />
      <Article />
    </ContainerArticle>
  );
}
