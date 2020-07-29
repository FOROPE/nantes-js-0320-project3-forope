import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button, LinkButton } from '../mainStyle';

const IconArrow = styled.i`
  padding-left: 0.5rem;
`;

export default function Btn({ seeMore, quizz, link }) {
  return (
    <LinkButton to={link}>
      <Button quizz={quizz} type="button">
        {seeMore}
        <IconArrow className="fas fa-chevron-circle-right" />
      </Button>
    </LinkButton>
  );
}
Btn.propTypes = {
  seeMore: PropTypes.string.isRequired,
  quizz: PropTypes.string,
  link: PropTypes.string,
};
