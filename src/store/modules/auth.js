import client from 'api/client';
import stateGenerator from 'helpers/modules/state';

export const state = stateGenerator();

const prefix = 'users';

export const actions = {
  create: (params) => client.post(`/${prefix}`, {
    ...params,
  }),

  auth: (params) => client.post(`/${prefix}/auth`, {
    ...params,
  }),

  update: (params) => client.put(`/${prefix}`, {
    ...params,
  }),
};

export default state;
