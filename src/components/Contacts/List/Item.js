import React, {
  useCallback,
  useContext,
} from 'react';

import {
  useHistory,
} from 'react-router-dom';

import {
  faPen,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import FormButton from 'components/Form/Button';
import FontsSubtitle from 'components/Fonts/Subtitle';

import { contactType, setNavLink } from 'components/Contacts/helpers';
import { namelize } from 'helpers/text/namelize';
import { phonelize } from 'helpers/text/phonelize';

import {
  ContactsListItemContainer,
  ContactsListItemDetails,
  ContactsListItemButtons,
} from 'components/Contacts/List/styles';

import context from '../../../store';
import { actions } from '../../../store/modules/contacts';

const ContactsListItem = ({ contact }) => {
  const { push } = useHistory();
  const { states, storeDispatch } = useContext(context);

  const handlEdit = () => push(`/contacts/${contact.uuid}/edit`);

  const onDeleteSuccess = useCallback(() => {
    storeDispatch('contacts', 'LIST', states.contacts.LIST.filter((i) => i.uuid !== contact.uuid));

    push('/');
  }, [push, states.contacts.LIST, contact.uuid, storeDispatch]);

  const onDelete = useCallback(() => {
    actions.delete(contact.uuid).then(onDeleteSuccess).catch();
  }, [onDeleteSuccess, contact.uuid]);

  return (
    <ContactsListItemContainer>
      <ContactsListItemDetails to={setNavLink(contact.uuid)}>
        <FontsSubtitle label={namelize(contact.first_name, contact.last_name)} />
        <div>
          {phonelize(contact.phone)}
        </div>
        <div>
          {contact.email}
        </div>
      </ContactsListItemDetails>
      <ContactsListItemButtons>
        <FormButton
          size="xs"
          icon={faPen}
          onClick={handlEdit}
        />
        <FormButton
          color="red"
          size="xs"
          icon={faTimes}
          onClick={onDelete}
        />
      </ContactsListItemButtons>
    </ContactsListItemContainer>
  );
};

ContactsListItem.propTypes = {
  contact: contactType.isRequired,
};

export default ContactsListItem;
