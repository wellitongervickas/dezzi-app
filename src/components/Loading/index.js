import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { violetDark } from 'assets/stylesheets/js/colors';
import LoadingContainer from 'components/Loading/styles';

const Loading = ({ color, size }) => (
  <LoadingContainer>
    <FontAwesomeIcon
      icon={faSpinner}
      color={color}
      size={size}
      spin
    />
  </LoadingContainer>
);

Loading.defaultProps = {
  color: violetDark,
  size: 'lg',
};

Loading.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

export default Loading;
