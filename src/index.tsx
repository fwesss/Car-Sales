// React
import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// Reducers
import { featureReducer } from './reducers/featureReducer';
// Components
import App from './components/App';
// UI
import 'bulma/css/bulma.css';
import './styles.scss';

const applicationStore = createStore(featureReducer, composeWithDevTools(applyMiddleware()));

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={applicationStore}>
    <App />
  </Provider>,
  rootElement
);
