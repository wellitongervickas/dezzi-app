import React, {
  useContext,
} from 'react';

import { useHistory } from 'react-router-dom';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import View from 'components/Page/View';
import Dashboard from 'components/Dashboard';
import ContactsList from 'components/Contacts/List';
import FormButton from 'components/Form/Button';
import Loading from 'components/Loading';

import {
  ContactsContainer,
  ContactsTitle,
} from 'views/contacts/styles';

import context from '../../store';

const Contacts = () => {
  const { states } = useContext(context);
  const { push } = useHistory();

  const handleNew = () => push('contacts/new');

  return (
    <View>
      <Dashboard>
        <ContactsContainer>
          <ContactsTitle label="Contacts">
            <FormButton
              icon={faPlus}
              size="sm"
              label="New"
              onClick={handleNew}
            />
          </ContactsTitle>
          {states.contacts.LIST_LOADING ? (
            <Loading size="2x" />
          ) : (
            <ContactsList contacts={states.contacts.LIST} />
          )}
        </ContactsContainer>
      </Dashboard>
    </View>
  );
};

export default Contacts;
