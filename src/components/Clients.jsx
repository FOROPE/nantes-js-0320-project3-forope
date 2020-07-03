import React from 'react';
import styled from 'styled-components';
import { Flex } from '../mainStyle';

const ClientContainer = styled(Flex)`
  margin: 1rem 9rem;
  justify-content: center;
`;

const ClientText = styled.div`
  width: 60%;
  padding-right: 10rem;
  text-align: left;
  font-size: 19px;
`;

const Logos = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const Logo = styled.img`
  padding: 0 1rem 1rem 0;
  height: 80px;
`;

export default function Clients() {
  return (
    <ClientContainer>
      <ClientText>
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      </ClientText>
      <Logos>
        <Logo src="https://via.placeholder.com/100" alt="placeholder" />
        <Logo src="https://via.placeholder.com/100" alt="placeholder" />
        <Logo src="https://via.placeholder.com/100" alt="placeholder" />
        <Logo src="https://via.placeholder.com/100" alt="placeholder" />
        <Logo src="https://via.placeholder.com/100" alt="placeholder" />
        <Logo src="https://via.placeholder.com/100" alt="placeholder" />
        <Logo src="https://via.placeholder.com/100" alt="placeholder" />
      </Logos>
    </ClientContainer>
  );
}
