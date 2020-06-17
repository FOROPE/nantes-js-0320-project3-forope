import styled from 'styled-components';

export const ContainerBanner = styled.div`
  display: flex;
  /* border: 2px solid black; */
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
  margin-left: 2vh;
`;

export const InputForm = styled.input`
  width: 100%;
  padding: 1vh;
  margin-bottom: 2vh;
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
