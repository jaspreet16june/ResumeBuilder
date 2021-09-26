import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './redux/rootReducer';
//thunk helps in doing any async work
import thunk from 'redux-thunk';

let myStore = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(
  <Provider store = {myStore}>
    <App />
  </Provider>, 
  document.getElementById('root')
)
