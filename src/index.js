import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import userReducer from './redux/reducer/userReducer';

let myStore = createStore(userReducer)

ReactDOM.render(
  <Provider store = {myStore}>
    <App />
  </Provider>, 
  document.getElementById('root')
)
