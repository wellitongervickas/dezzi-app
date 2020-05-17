import React from 'react';

import { defaultPropTypes } from 'components/Contacts/helpers';

import SidebarItem from 'components/Contacts/Sidebar/Item';
import SidebarEmpty from 'components/Contacts/Sidebar/Empty';

const SidebarList = ({ contacts = [] }) => {
  if (contacts.length) {
    return contacts.map((contact) => <SidebarItem key={contact.uuid} contact={contact} />);
  }

  return <SidebarEmpty />;
};

SidebarList.propTypes = {
  ...defaultPropTypes,
};

export default SidebarList;
