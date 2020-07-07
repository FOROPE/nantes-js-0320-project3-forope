import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button, LinkButton } from '../mainStyle';


const IconArrow = styled.i`
  padding-left: 0.5rem;
`;


const IconArrow = styled.i`
  padding-left: 0.5rem;
`;

export default function Btn({ seeMore, quizz, link }) {
  return (
    <Button quizz={quizz} type="button">

      <LinkButton to={link}>
        {' '}
        {seeMore}
        <IconArrow className="fas fa-chevron-circle-right" />
      </LinkButton>

    </Button>
  );
}
Btn.propTypes = {
  seeMore: PropTypes.string.isRequired,
  quizz: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
