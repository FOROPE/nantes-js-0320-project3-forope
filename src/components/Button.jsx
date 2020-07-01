import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, LogoArrow } from '../mainStyle';
import arrow from './img/arrow.png';

export default function Btn({ seeMore, quizz, link }) {
  return (
    <Button quizz={quizz} type="button">
      <Link to={link}>
        {' '}
        {seeMore}
        <LogoArrow src={arrow} alt="Next" />
      </Link>
    </Button>
  );
}
Btn.propTypes = {
  seeMore: PropTypes.string.isRequired,
  quizz: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
