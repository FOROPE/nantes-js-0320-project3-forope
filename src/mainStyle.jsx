import styled from 'styled-components';

export const ContainerBandeau = styled.div`
  display: flex;
  border: 2px solid black;
  height: 50vh;
  align-items: ${(props) => props.center && 'center'};
  justify-content: ${(props) => props.center && 'center'};
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.col ? 'column' : 'row')};
`;
