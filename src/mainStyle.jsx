import styled from 'styled-components';

export const ContainerBanner = styled.div`
  display: flex;
  height: 50vh;
  align-items: ${(props) => props.center && 'center'};
  justify-content: ${(props) => props.center && 'center'};

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
  font-size: 12px;
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
  padding-left: ${(props) => (props.quizz ? '0' : '4rem')};
  color: ${(props) => props.theme.mediumGreen};
  margin: ${(props) => props.quizz && '0'};
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
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 30%;
  border: 1px solid ${(props) => (props.quizz ? props.theme.orange : 'white')};
  border-radius: 30px;
  background-color: ${(props) =>
    props.quizz ? props.theme.orange : 'transparent'};
  padding: 0.5rem;
  font-size: 0.9rem;
`;

export const LogoArrow = styled.img`
  width: 10%;
  margin-left: 0.5rem;
  vertical-align: middle;
`;

export const Punctuation = styled.span`
  color: ${(props) => props.theme.orange};
`;
