import React from 'react';
import PropTypes from 'prop-types';

import { white } from 'assets/stylesheets/js/colors';

import { WrapperContainer } from 'components/Wrapper/styles';

const Wrapper = ({ backgroundColor, children }) => (
  <WrapperContainer
    backgroundColor={backgroundColor}
  >
    {children}
  </WrapperContainer>
);

Wrapper.defaultProps = {
  backgroundColor: white,
  children: null,
};

Wrapper.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
};

export default Wrapper;
