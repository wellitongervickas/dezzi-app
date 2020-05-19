import React from 'react';

import PropTypes from 'prop-types';
import AlertContainer from 'components/Alert/styles';

import 'jest-styled-components';


const Alert = ({ color, text }) => (
  <AlertContainer color={color}>
    <span>{text}</span>
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
