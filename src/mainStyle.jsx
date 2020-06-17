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
