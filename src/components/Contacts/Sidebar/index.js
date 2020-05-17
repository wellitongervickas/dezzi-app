import React, {
  useContext,
  useLayoutEffect,
  useCallback,
} from 'react';

import Loading from 'components/Loading';
import ContactsSidebarList from 'components/Contacts/Sidebar/List';

import { white } from 'assets/stylesheets/js/colors';
import { actions } from '../../../store/modules/contacts';
import context from '../../../store';

const prefix = 'contacts';

const ContactsSidebar = () => {
  const { states, storeDispatch } = useContext(context);

  const onGetSuccess = useCallback((res) => {
    storeDispatch(prefix, 'LIST', res);
    storeDispatch(prefix, 'LIST_LOADING', false);
  }, [storeDispatch]);

  const onGetFailure = useCallback(() => {
    storeDispatch(prefix, 'LIST_LOADING', false);
  }, [storeDispatch]);

  useLayoutEffect(() => {
    storeDispatch(prefix, 'LIST', []);
    storeDispatch(prefix, 'LIST_LOADING', true);

    actions.get().then(onGetSuccess).catch(onGetFailure);
  }, [storeDispatch, onGetSuccess, onGetFailure]);

  return states.contacts.LIST_LOADING ? (
    <Loading color={white} />
  ) : (
    <ContactsSidebarList contacts={states.contacts.LIST} />
  );
};

export default ContactsSidebar;
