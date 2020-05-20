import React from 'react';
import PropTypes from 'prop-types';

import SectionItem from 'components/Sections/Item';

import {
  SectionsListContainer,
} from 'components/Sections/styles';

const SectionsList = ({ list }) => (
  <SectionsListContainer>
    {list.map((item) => (
      <SectionItem key={item.id} label={item.label} value={item.value} />
    ))}
  </SectionsListContainer>
);

SectionsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
};

export default SectionsList;
