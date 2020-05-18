import React from 'react';

import PropTypes from 'prop-types';
import AlertContainer from 'components/Alert/styles';

const Alert = ({ color, text }) => (
  <AlertContainer color={color}>
    <span data-testid="text">{text}</span>
  </AlertContainer>
);

Alert.defaultProps = {
  color: 'green',
};

Alert.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Alert;
