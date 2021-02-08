
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import logger from 'redux-logger'

import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

import rootReducer from './reducers';

import firebase from 'firebase';
import firebaseConfig from './firebaseConfig'
firebase.initializeApp(firebaseConfig)

const initialState = {}
// const store = createStoreWithFirebase(rootReducer, initialState, applyMiddleware(logger));

const store = createStore(rootReducer, initialState, applyMiddleware(logger))

const rrfConfig = {
  userProfile: 'users'
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
}


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <ReactReduxFirebaseProvider {...rrfProps}  >
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
