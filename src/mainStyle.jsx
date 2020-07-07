import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerBanner = styled.div`
  display: flex;
  height: 50vh;
  align-items: ${(props) => props.center && 'center'};
  justify-content: ${(props) => props.center && 'center'};
  justify-content: ${(props) => props.flexstart && 'flex-start'};

  box-sizing: content-box;
  overflow: hidden;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.col ? 'column' : 'row')};
  justify-content: ${(props) => props.end && 'flex-end'};
  justify-content: ${(props) => props.btw && 'space-between'};
`;

export const TextContent = styled.p`
  font-size: 19px;
  text-align: ${(props) => props.center && 'center'};
`;

export const InputForm = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  background: ${(props) => props.theme.orange};
  border-color: white;
  border-style: double;
  &::-webkit-input-placeholder {
    color: white;
  }
`;

export const TitleH2 = styled.h2`
  font-size: 2.5rem;
  width: ${(props) => (props.quizz ? '60%' : '20%')};
  color: ${(props) => props.theme.mediumGreen};
  margin: ${(props) => (props.quizz ? '0' : '3rem 6rem')};
`;

export const TitleH3 = styled.h3`
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.mediumGreen};
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 2rem;
  font-weight: normal;
  color: ${(props) => props.theme.mediumGreen};
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleH4 = styled.h4`
  margin: 0.5rem;
  color: ${(props) => props.theme.mediumGreen};
  font-size: 24px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  color: white;
  border: 1px solid ${(props) => (props.quizz ? props.theme.orange : 'white')};
  border-radius: 30px;
  background-color: ${(props) =>
    props.quizz ? props.theme.orange : 'transparent'};
  padding: 0.7em 1rem;
  font-size: 14px;
`;

export const LogoArrow = styled.img`
  width: 10%;
  margin-left: 0.5rem;
  vertical-align: middle;
`;

export const Punctuation = styled.span`
  color: ${(props) => props.theme.orange};
`;

export const Content = styled.div`
  display: flex;
  margin: 0 9rem;
  justify-content: space-between;
  align-items: center;
`;

export const Italic = styled.p`
  font-style: italic;
`;

export const Subtitle = styled.p`
  font-size: 19px;
`;


export const LinkPage = styled.a`
  color: ${(props) => (props.button ? 'white' : 'black')};
  text-decoration: none;
`;

export const LinkButton = styled(Link)`
  text-decoration: none;
  color: white;
`;

