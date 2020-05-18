import statesGenerator from 'helpers/modules/state';

describe('Helpers Modules', () => {
  it('should be defined', () => {
    expect(statesGenerator).toBeDefined();
  });

  it('should have initial states', () => {
    expect(statesGenerator()).toEqual({
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
    });
  });
});
