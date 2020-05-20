import React from 'react';
import PropTypes from 'prop-types';

import { ViewContrainer } from 'components/Page/styles';

const View = ({ children }) => (
  <ViewContrainer>
    <section>
      {children}
    </section>
  </ViewContrainer>
);

View.defaultProps = {
  children: null,
};

View.propTypes = {
  children: PropTypes.node,
};

export default View;
