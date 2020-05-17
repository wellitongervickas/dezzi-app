import React, {
  useState,
  useMemo,
  useContext,
  useCallback,
} from 'react';

import View from 'components/Page/View';
import Dashboard from 'components/Dashboard';
import Form from 'components/Form';
import Alert from 'components/Alert';

import {
  UsersContainer,
  UsersTitle,
} from 'views/users/styles';

import fields from 'views/users/Form/fields';
import { actions } from 'store/modules/auth';
import context from '../../store';

const prefix = 'auth';

const UsersForm = () => {
  const { states, storeDispatch } = useContext(context);

  const [formFields, setFormFields] = useState([...fields()]);
  const [formErrors, setFormErrors] = useState([]);

  const showAlert = Object.keys(states.auth.UPDATE).length > 0;

  const loading = useMemo(() => states.auth.UPDATE_LOADING, [states.auth.UPDATE_LOADING]);

  useMemo(() => {
    const { user } = states.auth.READ;

    setFormFields((s) => {
      s.forEach((item) => {
        // eslint-disable-next-line no-param-reassign
        item.value = user[item.id];
      });

      return [...s];
    });
  }, [states.auth.READ]);

  const onSubmitSuccess = useCallback((response) => {
    storeDispatch(prefix, 'UPDATE_LOADING', false);
    storeDispatch(prefix, 'UPDATE', response);

    storeDispatch(prefix, 'READ', {
      ...states.auth.READ,
      user: {
        ...response,
      },
    });
  }, [storeDispatch, states.auth.READ]);

  const onSubmitFailure = useCallback((errors) => {
    storeDispatch(prefix, 'UPDATE_LOADING', false);
    setFormErrors(errors);
  }, [storeDispatch, setFormErrors]);

  const handleSubmit = useCallback((data) => {
    storeDispatch(prefix, 'UPDATE', {});
    storeDispatch(prefix, 'UPDATE_LOADING', true);

    actions.update(data).then(onSubmitSuccess).catch(onSubmitFailure);
  }, [onSubmitSuccess, onSubmitFailure, storeDispatch]);

  return (
    <View>
      <Dashboard>
        <UsersContainer>
          <UsersTitle label="Edit Profile" />
          {showAlert && <Alert text="Updated successfully" />}
          <Form
            fields={formFields}
            onSubmit={handleSubmit}
            loading={loading}
            formErrors={formErrors}
          />
        </UsersContainer>
      </Dashboard>
    </View>
  );
};


export default UsersForm;
