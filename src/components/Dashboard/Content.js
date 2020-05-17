import React from 'react';
import PropTypes from 'prop-types';

import { ContentContainer } from 'components/Dashboard/styles';

import Wrapper from 'components/Wrapper';

const Content = ({ children }) => (
  <ContentContainer>
    <Wrapper>
      {children}
    </Wrapper>
  </ContentContainer>
);

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
