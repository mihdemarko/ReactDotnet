import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game/Game';
import './body.css';

document.body.classList.add('body', 'ol', 'ul');

ReactDOM.render(
  <Game />,
  document.getElementById('content')
);