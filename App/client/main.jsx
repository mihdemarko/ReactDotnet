import React from 'react';
import ReactDOM from 'react-dom';
import RCSearch from './components/RCSearch/RCSearch';
import './body.less';
import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';

ReactDOM.render(
  <RCSearch />,
  document.getElementById('content')
);