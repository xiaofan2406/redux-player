import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';


function configureStore(initialState = {}) {
  const middleware = [reduxThunk]; // add redux-thunk or saga here

  // dev only middlewares
  if (process.env.NODE_ENV === 'development') {
    middleware.push(require('redux-immutable-state-invariant')()); // eslint-disable-line
    middleware.push(require('redux-logger')()); // eslint-disable-line
  }

  const store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(...middleware),
      // Redux dev tool chrome extensions
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers'); // eslint-disable-line
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}


export default configureStore;
