import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Icons = styled.span`
  margin-right: 1rem;
`;

export default function Emoji({ label, symbol }) {
  return (
    <Icons
      className="emoji"
      role="img"
      aria-label={label || ''}
      aria-hidden={label ? 'false' : 'true'}
    >
      {symbol}
    </Icons>
  );
}

Emoji.propTypes = {
  label: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};
