import auth, { actions as authActions } from './auth';
import contacts, { actions as contactsActions } from './contacts';
import billings, { actions as billingsActions } from './billings';

const defaultStates = {
  LIST: [],
  LIST_LOADING: false,
  LIST_ERRORS: [],
  CREATE: {},
  CREATE_LOADING: false,
  CREATE_ERRORS: [],
  READ: {},
  READ_LOADING: false,
  READ_ERRORS: [],
  DELETE: {},
  DELETE_LOADING: false,
  DELETE_ERRORS: [],
  UPDATE: {},
  UPDATE_LOADING: false,
  UPDATE_ERRORS: [],
};

describe('Store Modules', () => {
  it('should be defined', () => {
    expect(auth).toBeDefined();
    expect(contacts).toBeDefined();
    expect(billings).toBeDefined();
  });

  it('should have initial state values', () => {
    expect(auth).toEqual(defaultStates);
    expect(contacts).toEqual(defaultStates);
    expect(billings).toEqual(defaultStates);
  })

  it('should have defined actions to API', () => {
    expect(authActions.auth).toBeDefined();
    expect(authActions.create).toBeDefined();
    expect(authActions.update).toBeDefined();

    expect(contactsActions.create).toBeDefined();
    expect(contactsActions.delete).toBeDefined();
    expect(contactsActions.update).toBeDefined();
    expect(contactsActions.get).toBeDefined();
    expect(contactsActions.getContact).toBeDefined();

    expect(billingsActions.create).toBeDefined();
    expect(billingsActions.delete).toBeDefined();
    expect(billingsActions.get).toBeDefined();
  });
});
