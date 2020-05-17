import React from 'react';

import {
  FontsSubtitleContainer,
} from 'components/Fonts/styles';

import { defaultProps, defaultPropTypes } from 'components/Fonts/helpers';

const FontsSubtitle = ({
  children,
  label,
  color,
  className,
}) => (
  <FontsSubtitleContainer
    className={className}
    color={color}
  >
    <h2>{label}</h2>
    {children}
  </FontsSubtitleContainer>
);

FontsSubtitle.defaultProps = {
  ...defaultProps,
};

FontsSubtitle.propTypes = {
  ...defaultPropTypes,
};

export default FontsSubtitle;
