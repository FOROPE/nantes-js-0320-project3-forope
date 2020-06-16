import React from 'react';
import styled from 'styled-components';
import { ContainerBandeau, Flex } from '../mainStyle';

const TitlesBandeau = styled(Flex)`
  justify-content: center;
  height: 100%;
`;

const SubtitleBandeau = styled.p`
  width: 40%;
  text-align: left;
  align-self: flex-end;
  margin: 0;
`;

const TitleBandeau = styled.h1`
  font-size: 5rem;
  margin-bottom: 1vw;
  text-decoration: underline;
`;
export default function BandeauTitre() {
  return (
    <ContainerBandeau center>
      <TitlesBandeau col>
        <TitleBandeau>Forope.</TitleBandeau>
        <SubtitleBandeau>
          Lorem ipsum dolor sit amet, consecteconsecte- tuer adipiscing elit,
        </SubtitleBandeau>
      </TitlesBandeau>
    </ContainerBandeau>
  );
}
