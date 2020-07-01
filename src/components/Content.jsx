import React from 'react';
import styled from 'styled-components';
import circlegrey from './img/circlegrey.png';

const ContainerContent = styled.div`
  text-align: left;
  width: 85%;
  margin-left: 2rem;
  color: ${(props) => props.theme.grey};
`;

const TextContent = styled.p`
  margin-left: 2rem;
`;

const ContainerShare = styled.div`
  text-align: right;
  margin-right: 2rem;
  color: ${(props) => props.theme.orange};
  margin-right: 12rem;
`;

const Logo = styled.img`
  width: 2.5%;
  margin-left: 0.4rem;
`;

export default function Content() {
  return (
    <>
      <ContainerContent>
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
