import * as types from 'components/Form/types';

export const newBillingFields = () => [{
  ...types.input,
  id: 'value',
  label: 'Value',
  value: '',
  placeholder: 'Please type a value',
  validations: [{
    type: 'blank',
  }],
}];

export default () => [{
  ...types.input,
  id: 'first_name',
  label: 'First name',
  placeholder: 'Please type a first name',
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
  id: 'phone',
  label: 'Phone',
  placeholder: 'Please type a phone',
  validations: [{
    type: 'blank',
  }],
}];
