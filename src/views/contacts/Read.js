import React, {
  useEffect,
  useContext,
  useCallback,
  useState,
} from 'react';

import { useRouteMatch } from 'react-router-dom';

import View from 'components/Page/View';
import Dashboard from 'components/Dashboard';
import ContactItem from 'components/Contacts/List/Item';
import ContactsBillingsList from 'components/Contacts/Billings/List';
import FontsSubtitle from 'components/Fonts/Subtitle';
import Loading from 'components/Loading';
import Form from 'components/Form';
import Separator from 'components/Separator';
import Alert from 'components/Alert';

import {
  ContactsContainer,
  ContactsTitle,
  ContactsContent,
} from 'views/contacts/styles';

import { calculateAmount } from 'views/contacts//helpers';
import { newBillingFields } from 'views/contacts/Form/fields';

import context from '../../store';
import { actions } from '../../store/modules/contacts';
import { actions as billingActions } from '../../store/modules/billings';

const prefix = 'billings';

const ContactsRead = () => {
  const { states, storeDispatch } = useContext(context);
  const { params } = useRouteMatch();

  const [formFields] = useState([...newBillingFields()]);
  const [formErrors, setFormErrors] = useState([]);

  const showAlert = Object.keys(states.billings.CREATE).length > 0;

  const onGetBillingsSuccess = useCallback((res) => {
    storeDispatch(prefix, 'LIST', res);
    storeDispatch(prefix, 'LIST_LOADING', false);
  }, [storeDispatch]);

  const handleGetBillings = useCallback(() => {
    storeDispatch(prefix, 'LIST_LOADING', true);

    billingActions.get(params.uuid).then(onGetBillingsSuccess);
  }, [storeDispatch, onGetBillingsSuccess, params.uuid]);

  const onGetContactSuccess = useCallback((res) => {
    storeDispatch('contacts', 'READ', res);
    storeDispatch('contacts', 'READ_LOADING', false);

    handleGetBillings();
  }, [storeDispatch, handleGetBillings]);

  const onSubmitSuccess = useCallback((res) => {
    storeDispatch(prefix, 'CREATE', res);
    storeDispatch(prefix, 'CREATE_LOADING', false);

    handleGetBillings();
  }, [storeDispatch, handleGetBillings]);

  const onSubmitFailure = useCallback((errors) => {
    storeDispatch(prefix, 'CREATE_LOADING', false);
    setFormErrors(errors);
  }, [storeDispatch, setFormErrors]);

  const handleSubmit = useCallback((data) => {
    storeDispatch(prefix, 'CREATE', {});
    storeDispatch(prefix, 'CREATE_LOADING', true);

    billingActions.create(params.uuid, data).then(onSubmitSuccess).catch(onSubmitFailure);
  }, [storeDispatch, params.uuid, onSubmitSuccess, onSubmitFailure]);

  useEffect(() => {
    const { uuid } = params;

    storeDispatch(prefix, 'CREATE', {});
    storeDispatch(prefix, 'LIST', []);

    storeDispatch('contacts', 'READ', {});
    storeDispatch('contacts', 'READ_LOADING', true);

    actions.getContact(uuid).then(onGetContactSuccess);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.uuid]);

  return (
    <View>
      <Dashboard>
        <ContactsContainer>
          <ContactsTitle label="Contact">
            {calculateAmount(states.billings.LIST)}
          </ContactsTitle>
          {states.contacts.READ_LOADING || !states.contacts.READ.uuid ? (
            <Loading />
          ) : (
            <ContactsContent>
              <ContactItem contact={states.contacts.READ} />
              <FontsSubtitle label="New bill" />
              {showAlert && <Alert text="Created successfully" />}
              <Form
                onSubmit={handleSubmit}
                fields={formFields}
                formErrors={formErrors}
                loading={states.billings.CREATE_LOADING}
              />
              <Separator />
              <FontsSubtitle label="Billings" />
              <ContactsBillingsList
                billings={states.billings.LIST}
                loading={states.billings.LIST_LOADING}
              />
            </ContactsContent>
          )}
        </ContactsContainer>
      </Dashboard>
    </View>
  );
};

export default ContactsRead;
