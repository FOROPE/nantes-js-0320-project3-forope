import React from 'react';
import PropTypes from 'prop-types';
import { Button, LogoArrow } from '../mainStyle';
import arrow from './img/arrow.png';

export default function Btn({ seeMore, quizz }) {
  return (
    <Button quizz={quizz} type="button">
      {seeMore}
      <LogoArrow src={arrow} alt="Next" />
    </Button>
  );
}
Btn.propTypes = {
  seeMore: PropTypes.string.isRequired,
  quizz: PropTypes.string.isRequired,
};
