import React from 'react';
import styled from 'styled-components';
import circlegrey from './img/circlegrey.png';

const ContainerContent = styled.div`
  text-align: left;
  width: 80%;
  margin-left: 3vw;
  color: ${(props) => props.theme.grey};
`;

const Title = styled.h2`
  color: ${(props) => props.theme.lightGreen};
  font-size: 3rem;
`;

const Dot = styled.span`
  color: ${(props) => props.theme.orange};
`;

const TextContent = styled.p`
  margin-left: 3vw;
`;

const ContainerShare = styled.div`
  text-align: right;
  margin-right: 3vw;
  color: ${(props) => props.theme.orange};
  margin-right: 12vw;
`;

const Logo = styled.img`
  width: 34px;
  margin-left: 0.8vh;
`;

export default function Content() {
  return (
    <>
      <ContainerContent>
        <Title>
          Contenu<Dot>.</Dot>
        </Title>
        <TextContent>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </TextContent>
      </ContainerContent>
      <ContainerShare>
        <p>Lien de partage</p>
        <Logo src={circlegrey} alt="logo réseaux sociaux" />
        <Logo src={circlegrey} alt="logo réseaux sociaux" />
        <Logo src={circlegrey} alt="logo réseaux sociaux" />
      </ContainerShare>
    </>
  );
}
