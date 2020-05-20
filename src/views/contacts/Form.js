import React, {
  useContext,
  // useMemo,
  useEffect,
  useState,
  useCallback,
} from 'react';

import {
  useRouteMatch,
  useHistory,
} from 'react-router-dom';

import View from 'components/Page/View';
import Dashboard from 'components/Dashboard';
import Form from 'components/Form';

import {
  ContactsContainer,
  ContactsTitle,
} from 'views/contacts/styles';

import fields from 'views/contacts/Form/fields';
import { actions } from '../../store/modules/contacts';
import context from '../../store';

const prefix = 'contacts';

const ContactsForm = () => {
  const { path, params } = useRouteMatch();
  const { push } = useHistory();
  const { states, storeDispatch } = useContext(context);

  const [formFields, setFormFields] = useState([...fields()]);
  const [formErrors, setFormErrors] = useState([]);

  const newContact = path.match('new');

  const statePrefix = newContact ? 'CREATE' : 'UPDATE';
  const loadingPrefix = `${statePrefix}_LOADING`;

  const label = newContact ? 'New Contact' : 'Edit';
  const loading = states.contacts[loadingPrefix];

  const onGetContactSuccess = useCallback((res) => {
    storeDispatch('contacts', 'READ', res);
    storeDispatch('contacts', 'READ_LOADING', false);

    setFormFields((s) => {
      s.forEach((i) => {
        // eslint-disable-next-line no-param-reassign
        i.value = res[i.id];
      });

      return [...s];
    });
  }, [storeDispatch, setFormFields]);

  useEffect(() => {
    if (!newContact) {
      storeDispatch(prefix, 'READ', {});
      storeDispatch(prefix, 'READ_LOADING', true);

      actions.getContact(params.uuid).then(onGetContactSuccess);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmitSuccess = useCallback((response) => {
    storeDispatch(prefix, loadingPrefix, false);
    storeDispatch(prefix, statePrefix, response);

    push(`/contacts/${states.contacts[statePrefix].uuid}`);
  }, [storeDispatch, statePrefix, loadingPrefix, push, states.contacts]);

  const onSubmitFailure = useCallback((errors) => {
    storeDispatch(prefix, loadingPrefix, false);
    setFormErrors(errors);
  }, [storeDispatch, setFormErrors, loadingPrefix]);

  const handleSubmit = useCallback((data) => {
    storeDispatch(prefix, statePrefix, {});
    storeDispatch(prefix, loadingPrefix, true);

    const action = newContact ? actions.create(data) : actions.update(params.uuid, data);
    action.then(onSubmitSuccess).catch(onSubmitFailure);
  }, [
    onSubmitSuccess,
    onSubmitFailure,
    storeDispatch,
    statePrefix,
    newContact,
    loadingPrefix,
    params.uuid,
  ]);

  return (
    <View>
      <Dashboard>
        <ContactsContainer>
          <ContactsTitle label={label} />
          <Form
            onSubmit={handleSubmit}
            fields={formFields}
            formErrors={formErrors}
            loading={loading}
          />
        </ContactsContainer>
      </Dashboard>
    </View>
  );
};

export default ContactsForm;
