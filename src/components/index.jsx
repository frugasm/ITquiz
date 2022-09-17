import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';

hydrate(
  <BrowserRouter>
    <App {...window.initState} />
  </BrowserRouter>,
  document.getElementById('root'),
);
