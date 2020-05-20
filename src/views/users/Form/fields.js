import * as types from 'components/Form/types';

export default () => [{
  ...types.input,
  id: 'first_name',
  label: 'First name',
  placeholder: 'Please type a first name',
  value: 'Gervikinha',
  validations: [{
    type: 'blank',
  }],
}, {
  ...types.input,
  id: 'last_name',
  label: 'Last name',
  placeholder: 'Please type a last name',
  validations: [{
    type: 'blank',
  }],
}, {
  ...types.input,
  id: 'email',
  label: 'Email',
  placeholder: 'Please type a email',
  validations: [{
    type: 'blank',
  }],
}, {
  ...types.input,
  id: 'password',
  label: 'New Password',
  fieldType: 'password',
  placeholder: 'Please type you password',
  validations: [{
    type: 'blank',
  }],
}];
