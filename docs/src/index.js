import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Router from './router';
import configureStore from './store';

const store = configureStore(); // create with initialState if any

const rootElement = document.getElementById('root');

if (process.env.NODE_ENV === 'development') {
  const { AppContainer } = require('react-hot-loader');

  const render = Component => {
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <Component />
        </Provider>
      </AppContainer>,
      rootElement
    );
  };

  render(Router);

  if (module.hot) {
    module.hot.accept('./router', () => {
      render(Router);
    });
  }
} else {
  ReactDOM.render(
    <Provider store={store}>
      <Router />
    </Provider>,
    rootElement
  );
}
