import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from './Root';


const rootElement = document.getElementById('root');

ReactDOM.render(
  <AppContainer>
    <Root />
  </AppContainer>,
  rootElement
);

// react-hot-loader setup
if (module.hot) {
  module.hot.accept('./Root', () => {
    const NextRoot = require('./Root').default; // eslint-disable-line
    ReactDOM.render(
      <AppContainer>
        <NextRoot />
      </AppContainer>,
      rootElement
    );
  });
}

// temporary fix for not including react-hot-loader in production build
