import React from 'react';
import styled from 'styled-components';
import arrow from './img/arrow.png';

const ContainerArticle = styled.div`
  background-color: ${(props) => props.theme.lightGreen};
  width: 35vh;
  margin-left: 3vh;
  padding: 2vh 6vh 4vh 6vh;
  text-align: left;
`;

const ArticleTitle = styled.h3`
  color: white;
`;

const ArticleText = styled.p`
  color: white;
  font-size: 12px;
  margin-bottom: 15vh;
`;

const Button = styled.button`
  color: white;
  border: 0.12vh solid white;
  border-radius: 3vh;
  background-color: transparent;
  padding-top: 1vh;
  padding-bottom: 1vh;
  font-size: 12px;
`;

const LogoArrow = styled.img`
  width: 14px;
  margin-left: 1vh;
  vertical-align: middle;
`;

export default function Article() {
  return (
    <ContainerArticle>
      <ArticleTitle>Première actu.</ArticleTitle>
      <ArticleText>
        Viens découvrir tout ce qu’on faire, on est des super champions de la
        formation de formateurs.
      </ArticleText>
      <Button type="button">
        En savoir plus <LogoArrow src={arrow} alt="Next" />
      </Button>
    </ContainerArticle>
  );
}
