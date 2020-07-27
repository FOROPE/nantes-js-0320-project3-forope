import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Btn from './Button';

const ContainerArticle = styled.div`
  background-color: ${(props) => props.theme.lightGreen};
  width: 25%;
  padding: 2rem;
  text-align: left;
`;

const ArticleTitle = styled.h3`
  color: white;
  font-size: 24px;
`;

const ArticleImg = styled.img`
  margin-bottom: 7rem;
  width: 100%;
`;

export default function Article({ title, content }) {
  return (
    <ContainerArticle>
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleImg src={content} />
      <Btn seeMore="En savoir plus" />
    </ContainerArticle>
  );
}
Article.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
