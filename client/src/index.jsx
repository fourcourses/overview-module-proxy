import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App.jsx';
import Header from './components/Header.jsx';
import { handleModal } from './components/App.jsx';
import style from './app.css';

console.log(() => App.handleModal);
ReactDOM.render(<App />, document.getElementById('overview'));
ReactDOM.render(<Header handleModal={() => App.handleModal}/>, document.getElementById('header'));