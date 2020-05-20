import React from 'react';

import {
  FontsTitleContainer,
} from 'components/Fonts/styles';

import { defaultProps, defaultPropTypes } from 'components/Fonts/helpers';

const FontsTitle = ({
  children,
  label,
  color,
  className,
}) => (
  <FontsTitleContainer
    className={className}
    color={color}
  >
    <h1>{label}</h1>
    {children}
  </FontsTitleContainer>
);

FontsTitle.defaultProps = {
  ...defaultProps,
};

FontsTitle.propTypes = {
  ...defaultPropTypes,
};

export default FontsTitle;
