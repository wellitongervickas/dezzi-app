import React from 'react';

import ContactsListItem from 'components/Contacts/List/Item';
import ContactsEmpty from 'components/Contacts/List/Empty';

import { defaultPropTypes } from 'components/Contacts/helpers';

const ContactsList = ({ contacts }) => {
  if (contacts.length) {
    return contacts.map((contact) => <ContactsListItem key={contact.uuid} contact={contact} />);
  }

  return <ContactsEmpty />;
};

ContactsList.defaultProps = {
  contacts: [],
};

ContactsList.propTypes = {
  ...defaultPropTypes,
};

export default ContactsList;
