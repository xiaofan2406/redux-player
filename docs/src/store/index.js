import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import reducer from './reducer';

function configureStore(initialState = {}) {
  const middlewares = [reduxThunk];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(require('redux-immutable-state-invariant').default());
    middlewares.push(require('redux-logger').default);
  }

  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      typeof window === 'object' &&
      typeof window.devToolsExtension !== 'undefined'
        ? window.devToolsExtension()
        : f => f
    )
  );

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

export default configureStore;
