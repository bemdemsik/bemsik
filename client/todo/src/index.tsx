import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client';
import {rootReducer} from "./redux/rootReducer";
import {sagaWatcher} from "./redux/saga/sagas";
import App from './App';
import { Authorization } from './components/authorization/authorization';
import React from 'react';
import { parseCookies } from 'nookies';

const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose(applyMiddleware(saga)))

saga.run(sagaWatcher)


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const token  = parseCookies()._token;
root.render(
  <Provider store = {store}>
    {!token
      ? <Authorization />
      : <App />
    }
  </Provider>
);
