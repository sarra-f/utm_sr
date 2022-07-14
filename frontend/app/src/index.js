import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import authReducer from './store/reducers/auth';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

const store = createStore(authReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
  <>
      <Provider store={store}>
          <App />
      </Provider>
  </>,
  document.getElementById('root')
);














