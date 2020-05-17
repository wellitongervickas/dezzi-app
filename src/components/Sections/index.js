import React from 'react';
import PropTypes from 'prop-types';

import SectionBlock from 'components/Sections/Block';

import {
  SectionsContainer,
} from 'components/Sections/styles';

const Sections = ({ sections }) => (
  <SectionsContainer>
    {sections.map((section) => <SectionBlock key={section.id} section={section} />)}
  </SectionsContainer>
);

Sections.defaultProps = {
  sections: [],
};

Sections.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })),
};

export default Sections;
