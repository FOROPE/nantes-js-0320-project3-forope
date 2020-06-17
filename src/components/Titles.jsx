import React from 'react';
import PropTypes from 'prop-types';
import { TitleH2, Flex } from '../mainStyle';

export default function Titles({ text, align }) {
  return (
    <Flex end={align}>
      <TitleH2>{text}</TitleH2>
    </Flex>
  );
}

Titles.propTypes = {
  text: PropTypes.string.isRequired,
  align: PropTypes.string.isRequired,
};
