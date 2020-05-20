import React from 'react';

import { SidebarContainer } from 'components/Dashboard/styles';
import ContactsSidebar from 'components/Contacts/Sidebar';

const Sidebar = () => (
  <SidebarContainer>
    <ContactsSidebar />
  </SidebarContainer>
);

export default Sidebar;
