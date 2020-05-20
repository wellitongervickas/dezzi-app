import React from 'react';
import PropTypes from 'prop-types';
import { VisibleContainer } from 'components/Page/styles';

export const visibleTypes = ['xl', 'lg', 'md', 'sm', 'xs'];

const Visible = ({ visible, children }) => (
  <VisibleContainer
    visible={visible}
  >
    {children}
  </VisibleContainer>
);

Visible.defaultProps = {
  visible: visibleTypes,
  children: null,
};

Visible.propTypes = {
  children: PropTypes.node,
  visible: PropTypes.arrayOf(PropTypes.oneOf(visibleTypes)),
};

export default Visible;
