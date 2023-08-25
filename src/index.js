import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { storeCounter } from './redux/store/store'
import { Provider } from 'react-redux';
ReactDOM.render(
  <Provider store={storeCounter}>
    <App />
  </Provider>,
  document.getElementById('root')
);

