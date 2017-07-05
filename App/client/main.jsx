import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game/Game';
import './body.css';
import {applyMiddleware, createStore} from 'redux';
import axios from 'axios';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import promise from "redux-promise-middleware";

const initialState = {
  fetching: false,
  fetched: false,
  users:[],
  error: null,
}
const reducer = (state = initialState, action) => {
  if (action.type === "FETCH_USER_PENDING") {
      return {
        ...state,
        fetching: true
      }
  } else if (action.type === "FETCH_USER_FULFILLED") {
      let users = state.users.concat(action.payload.data)
      return {
        ...state,
        fetching: false,
        users: users
      }
  } else if (action.type === "FETCH_USER_REJECTED") {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
  }
  return state
}

const middleware = applyMiddleware(promise(), thunk, createLogger());
const store = createStore(reducer, middleware);

store.dispatch ({
  type:"FETCH_USER",
  payload: axios.get("https://jsonplaceholder.typicode.com/Users/1")
})

ReactDOM.render(
  <Game />,
  document.getElementById('content')
);