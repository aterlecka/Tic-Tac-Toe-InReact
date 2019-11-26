import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './App';
import Square from './App';
import Game from './App';
import StartGame from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Board />, document.getElementById('root'));
ReactDOM.render(<Square />, document.getElementById('root'));
ReactDOM.render(<Game />, document.getElementById('root'));
ReactDOM.render(<StartGame />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
