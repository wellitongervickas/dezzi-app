import React, {
  useState,
  useMemo,
  useContext,
} from 'react';

import { useHistory } from 'react-router-dom';
import { faPen } from '@fortawesome/free-solid-svg-icons';

import View from 'components/Page/View';
import FormButton from 'components/Form/Button';
import Dashboard from 'components/Dashboard';
import Sections from 'components/Sections';

import {
  UsersContainer,
  UsersTitle,
} from 'views/users/styles';

import readSections from 'views/users/Read/sections';
import context from '../../store';

const Users = () => {
  const { states } = useContext(context);
  const { push } = useHistory();
  const [sections, setSections] = useState([...readSections()]);

  useMemo(() => {
    const { user } = states.auth.READ;

    setSections((s) => {
      s[0].list.forEach((item) => {
        // eslint-disable-next-line no-param-reassign
        item.value = user[item.id];
      });

      return [...s];
    });
  }, [states.auth.READ]);

  const handleEdit = () => push('/users/edit');

  return (
    <View>
      <Dashboard>
        <UsersContainer>
          <UsersTitle label="Profile">
            <FormButton
              icon={faPen}
              size="sm"
              label="Edit"
              onClick={handleEdit}
            />
          </UsersTitle>
          <Sections sections={sections} />
        </UsersContainer>
      </Dashboard>
    </View>
  );
};

export default Users;
