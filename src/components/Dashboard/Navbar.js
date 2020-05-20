import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faUser,
  faPowerOff,
  faBook,
} from '@fortawesome/free-solid-svg-icons';

import { NavbarContainer } from 'components/Dashboard/styles';
import Visible from 'components/Page/Visible';

const Navbar = () => (
  <NavbarContainer>
    <Visible visible={['md', 'sm', 'xs']}>
      <Link to="/contacts">
        <FontAwesomeIcon
          icon={faBook}
          cursor="pointer"
        />
      </Link>
    </Visible>
    <Link to="/users">
      <FontAwesomeIcon
        icon={faUser}
        cursor="pointer"
      />
    </Link>
    <Link to="/auth">
      <FontAwesomeIcon
        icon={faPowerOff}
        cursor="pointer"
      />
    </Link>
  </NavbarContainer>
);

export default Navbar;
