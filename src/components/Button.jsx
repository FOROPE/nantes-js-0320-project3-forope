import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '../mainStyle';

const IconArrow = styled.i`
  padding-left: 0.5rem;
`;

export default function Btn({ seeMore, quizz }) {
  return (
    <Button quizz={quizz} type="button">
      {seeMore}
      <IconArrow className="fas fa-chevron-circle-right" />
    </Button>
  );
}
Btn.propTypes = {
  seeMore: PropTypes.string.isRequired,
  quizz: PropTypes.string.isRequired,
};
