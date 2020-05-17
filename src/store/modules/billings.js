import client from 'api/client';
import stateGenerator from 'helpers/modules/state';

const prefix = 'billings';

export const state = stateGenerator();

export const actions = {
  get: (uuid) => client.get(`/${prefix}/${uuid}`),

  create: (uuid, params) => client.post(`/${prefix}/${uuid}`, {
    ...params,
  }),

  delete: (uuid, billingUuid) => client.delete(`/${prefix}/${uuid}/${billingUuid}`),
};

export default state;
