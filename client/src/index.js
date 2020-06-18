import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk'

import rootReducer from './store/store';
import API from './services/index';


API.SET_DATABASE_URL();


const logger = (state) => {
  return (next) => {
    return action => {
      console.log('[MiddleWare]', action);
      const result = next(action)
      console.log('[MiddleWare Next State]', store.getState());
      return result;
    }
  }
}

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f));

console.log('Store', store);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
