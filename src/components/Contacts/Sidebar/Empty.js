import React from 'react';
import { useHistory } from 'react-router-dom';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import FormButton from 'components/Form/Button';

import {
  SidebarEmptyContainer,
} from 'components/Contacts/Sidebar/styles';

const SidebarEmpty = () => {
  const { push } = useHistory();

  const handleNewContact = () => push('/contacts/new');

  return (
    <SidebarEmptyContainer>
      <p>
        No Contacts Yet!
      </p>
      <FormButton
        onClick={handleNewContact}
        icon={faPlus}
        label="First Contact"
        size="xs"
      />
    </SidebarEmptyContainer>
  );
};

export default SidebarEmpty;
