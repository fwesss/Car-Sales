// React
import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// Reducers
import featureSlice from './features/car-customizer/slices/featureSlice';
// Components
import App from './components/App';
// UI
import 'bulma/css/bulma.css';
import './styles.scss';

const store = configureStore({
  reducer: featureSlice.reducer
});

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

export default store;
