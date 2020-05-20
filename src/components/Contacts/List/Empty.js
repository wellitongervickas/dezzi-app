import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faGhost,
} from '@fortawesome/free-solid-svg-icons';

import {
  ContactsListEmptyContainer,
  ContactsListEmptyText,
  ContactsListEmptyIcon,
} from 'components/Contacts/List/styles';

const ContactsEmpty = () => (
  <ContactsListEmptyContainer>
    <ContactsListEmptyText>
      No contacts yet!
    </ContactsListEmptyText>
    <ContactsListEmptyIcon>
      <FontAwesomeIcon icon={faGhost} />
    </ContactsListEmptyIcon>
  </ContactsListEmptyContainer>
);

export default ContactsEmpty;
