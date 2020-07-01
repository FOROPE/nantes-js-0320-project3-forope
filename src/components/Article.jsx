import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import arrow from './img/arrow.png';

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

const Button = styled.button`
  color: white;
  border: 1px solid white;
  border-radius: 30px;
  background-color: transparent;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.75rem;
`;

const LogoArrow = styled.img`
  width: 3%;
  margin-left: 0.5rem;
  vertical-align: middle;
`;

export default function Article({ title, content, seeMore }) {
  return (
    <ContainerArticle>
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleText>{content}</ArticleText>
      <Button type="button">
        {seeMore}
        <LogoArrow src={arrow} alt="Next" />
      </Button>
    </ContainerArticle>
  );
}
Article.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  seeMore: PropTypes.string.isRequired,
};
