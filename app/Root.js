import React from 'react';
import { Provider } from 'react-redux';

import Store from './Store';
import Routes from './Routes';

const Root = () => (
  <Provider store={Store}>
      <Routes />
  </Provider>
);

export default Root;
