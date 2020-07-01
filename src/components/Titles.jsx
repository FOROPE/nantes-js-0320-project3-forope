import React from 'react';
import PropTypes from 'prop-types';
import { TitleH2, Flex, Punctuation } from '../mainStyle';

export default function Titles({ text, align, signs, quizz }) {
  return (
    <Flex end={align}>
      <TitleH2 quizz={quizz}>
        {text}
        <Punctuation>{signs}</Punctuation>
      </TitleH2>
    </Flex>
  );
}

Titles.propTypes = {
  text: PropTypes.string.isRequired,
  align: PropTypes.string.isRequired,
  signs: PropTypes.string.isRequired,
  quizz: PropTypes.string.isRequired,
};
