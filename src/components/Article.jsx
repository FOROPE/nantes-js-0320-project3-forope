import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Btn from './Button';

const ContainerArticle = styled.div`
  background-color: ${(props) => props.theme.lightGreen};
  width: 20%;
  padding: 0.5rem 3rem 2rem 3rem;
  text-align: left;
`;

const ArticleTitle = styled.h3`
  color: white;
`;

const ArticleText = styled.p`
  color: white;
  font-size: 0.75rem;
  margin-bottom: 7rem;
`;

export default function Article({ title, content }) {
  return (
    <ContainerArticle>
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleText>{content}</ArticleText>
      <Btn seeMore="En savoir plus" />
    </ContainerArticle>
  );
}
Article.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
