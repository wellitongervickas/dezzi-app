import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrog } from '@fortawesome/free-solid-svg-icons';

import LogoContainer from 'components/Logo/styles';

const Logo = () => (
  <Link to="/">
    <LogoContainer>
      <FontAwesomeIcon icon={faFrog} />
      <span>Dezzi</span>
    </LogoContainer>
  </Link>
);

export default Logo;
