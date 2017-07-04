import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game/Game';
import './body.css';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {createLogger} from 'redux-logger';

document.body.classList.add('body', 'ol', 'ul');

const userReducer = (state={}, action) => {
  switch(action.type){
    case "CHANGE_NAME": {
      state = {...state, name: action.payload};
      break;
    }
    case "CHANGE_AGE": {
      state = {...state, age: action.payload};
      break;
    }
  }
  return state;
}

const tweetsReducer = (state=[], action ) => {
  return state;
}

const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
})
const middleware = applyMiddleware(createLogger());
const store = createStore(reducers, middleware);

store.subscribe(() => {
  console.log ('store changed', store.getState())
})




store.dispatch({type:"CHANGE_NAME", payload: "Stan"})
store.dispatch({type:"CHANGE_AGE", payload: 18})
store.dispatch({type:"CHANGE_AGE", payload: 7})
store.dispatch({type:"INC", payload: 9})
store.dispatch({type:"DEC", payload: 10})

ReactDOM.render(
  <Game />,
  document.getElementById('content')
);