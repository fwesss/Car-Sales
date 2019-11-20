// React
import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// Reducers
import { featureReducer } from './reducers/featureReducer';
// Components
import App from './components/App';
// UI
import 'bulma/css/bulma.css';
import './styles.scss';

const applicationStore = createStore(featureReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={applicationStore}>
    <App />
  </Provider>,
  rootElement
);
