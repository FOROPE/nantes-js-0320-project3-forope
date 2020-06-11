import React from 'react';
import styled from 'styled-components';

const ContainerBandeau = styled.div`
  display: flex;
  border: 2px solid black;
  height: 50vh;
  align-items: center;
  justify-content: center;
`;

const TitlesBandeau = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    <ContainerBandeau>
      <TitlesBandeau>
        <TitleBandeau>Forope.</TitleBandeau>
        <SubtitleBandeau>
          Lorem ipsum dolor sit amet, consecteconsecte- tuer adipiscing elit,
        </SubtitleBandeau>
      </TitlesBandeau>
    </ContainerBandeau>
  );
}
