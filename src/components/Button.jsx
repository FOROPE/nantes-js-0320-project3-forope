import React from 'react';
import PropTypes from 'prop-types';
import { Button, LogoArrow, LinkButton } from '../mainStyle';
import arrow from './img/arrow.png';

export default function Btn({ seeMore, quizz, link }) {
  return (
    <Button quizz={quizz} type="button">
      <LinkButton to={link}>
        {' '}
        {seeMore}
        <LogoArrow src={arrow} alt="Next" />
      </LinkButton>
    </Button>
  );
}
Btn.propTypes = {
  seeMore: PropTypes.string.isRequired,
  quizz: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
