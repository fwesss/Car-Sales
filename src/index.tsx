// React
import React from 'react';
import ReactDOM from 'react-dom';
// Components
import AppContainer from './containers/AppContainer';
// UI
import 'bulma/css/bulma.css';
import './styles.scss';

const rootElement = document.getElementById('root');
ReactDOM.render(<AppContainer />, rootElement);
