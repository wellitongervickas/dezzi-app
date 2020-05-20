import React from 'react';
import PropTypes from 'prop-types';

import SectionList from 'components/Sections/List';
import FontsSubtitle from 'components/Fonts/Subtitle';

import {
  SectionsBlockContainer,
} from 'components/Sections/styles';

const SectionsBlock = ({ section }) => (
  <SectionsBlockContainer>
    {section.title && <FontsSubtitle label={section.title} />}
    <SectionList list={section.list} />
  </SectionsBlockContainer>
);

SectionsBlock.propTypes = {
  section: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default SectionsBlock;
