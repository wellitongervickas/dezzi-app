import React, {
  createContext,
  useState,
  useCallback,
  useMemo,
} from 'react';

import PropTypes from 'prop-types';

import { getStorage } from 'helpers/session/storage';


import auth from './modules/auth';
import contacts from './modules/contacts';
import billings from './modules/billings';

const states = {
  auth,
  contacts,
  billings,
};

const StoreContext = createContext({
  storeDispatch: () => {},
  states,
});

const StoreContextProvider = ({ children }) => {
  const [moduleState, dispatch] = useState({ ...states });

  const storeDispatch = useCallback((store, action, value) => {
    dispatch((s) => {
      try {
        // eslint-disable-next-line no-param-reassign
        s[store][action] = value;
      } catch (error) { /** */ }

      return { ...s };
    });
  }, [dispatch]);

  useMemo(() => {
    const authenticated = getStorage('auth');

    if (!states.auth.READ.token && authenticated) {
      storeDispatch('auth', 'READ', authenticated);
    }
  }, [storeDispatch]);

  return (
    <StoreContext.Provider
      value={{
        storeDispatch,
        states: {
          ...moduleState,
        },
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

StoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {
  StoreContextProvider,
};

export default StoreContext;
