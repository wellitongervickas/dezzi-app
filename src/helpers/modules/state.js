const stateGenerator = () => ({
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

export default (prefix) => {
  const states = stateGenerator(prefix);

  return Object
    .keys(states)
    .reduce((curr, acc) => {
      // eslint-disable-next-line no-param-reassign
      curr[acc] = states[acc];
      return curr;
    }, {});
};
