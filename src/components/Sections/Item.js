import React from 'react';
import PropTypes from 'prop-types';

import {
  SectionsItemContainer,
  SectionItemLabel,
  SectionItemValue,
} from 'components/Sections/styles';

const SectionsItem = ({
  label,
  value,
}) => (
  <SectionsItemContainer>
    <SectionItemLabel>{label}</SectionItemLabel>
    <SectionItemValue>{value}</SectionItemValue>
  </SectionsItemContainer>
);

SectionsItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default SectionsItem;
