import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

import React from 'react';
import ReactDOM from 'react-dom';
import store from './config/store'

import './index.css';
import App from './App';

const app = <Provider store={store}>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
</Provider>

ReactDOM.render(app,document.getElementById('root'));


