import Login from 'views/login';

import Contacts from 'views/contacts';
import ContactsForm from 'views/contacts/Form';
import ContactsRead from 'views/contacts/Read';

import Users from 'views/users';
import UsersForm from 'views/users/Form';

export default [{
  name: 'login',
  path: '/auth',
  component: Login,
  meta: {
    public: true,
  },
}, {
  name: 'auth-login',
  path: '/auth/login',
  component: Login,
  meta: {
    public: true,
  },
}, {
  name: 'auth-register',
  path: '/auth/register',
  component: Login,
  meta: {
    public: true,
  },
}, {
  name: 'contacts',
  path: '/',
  component: Contacts,
  meta: {
    protected: true,
  },
}, {
  name: 'contacts',
  path: '/contacts',
  component: Contacts,
  meta: {
    protected: true,
  },
}, {
  name: 'contacts-new',
  path: '/contacts/new',
  component: ContactsForm,
  meta: {
    protected: true,
  },
}, {
  name: 'contacts-read',
  path: '/contacts/:uuid',
  component: ContactsRead,
  meta: {
    protected: true,
  },
}, {
  name: 'contacts-edit',
  path: '/contacts/:uuid/edit',
  component: ContactsForm,
  meta: {
    protected: true,
  },
}, {
  name: 'users',
  path: '/users',
  component: Users,
  meta: {
    protected: true,
  },
}, {
  name: 'users-edit',
  path: '/users/edit',
  component: UsersForm,
  meta: {
    protected: true,
  },
}];
