import React from 'react';

import {
  contactType,
  setNavLink,
} from 'components/Contacts/helpers';

import { namelize } from 'helpers/text/namelize';

import {
  SidebarItemContainer,
  SidebarItemName,
  SidebarItemPhone,
} from 'components/Contacts/Sidebar/styles';

import { phonelize } from 'helpers/text/phonelize';

const SidebarItem = ({ contact }) => (
  <SidebarItemContainer to={setNavLink(contact.uuid)}>
    <SidebarItemName>
      {namelize(contact.first_name, contact.last_name)}
    </SidebarItemName>
    <SidebarItemPhone>
      {phonelize(contact.phone)}
    </SidebarItemPhone>
  </SidebarItemContainer>
);

SidebarItem.propTypes = {
  contact: contactType.isRequired,
};

export default SidebarItem;
