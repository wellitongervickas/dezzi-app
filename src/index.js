import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'routes';
import GlobalStyle from 'assets/stylesheets/app';

import {
  StoreContextProvider,
} from './store';

ReactDOM.render(
  <React.StrictMode>
    <StoreContextProvider>
      <GlobalStyle />
      <Routes />
    </StoreContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
