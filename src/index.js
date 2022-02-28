import React from 'react';
import ReactDOM from 'react-dom';
window.React = React;
window.ReactDOM = ReactDOM;
import './index.css';
import App from './App';
window.App = App;


import { useWebSocket } from './hooks/useWebSocket';
import { useBodyBounderies } from './hooks/useBodyBounderies'
import { ws, playerMoves } from './Utils.js/Utils'
import { useEventListener } from './hooks/useEventListener'
import Monkeys from './components/Monkeys'
import Score from './components/score/Score'
import Dialog from './components/dialog/Dialog'
import Exceptions from './components/exceptions/Exceptions'

window.useWebSocket = useWebSocket;
window.useBodyBounderies = useBodyBounderies;
window.ws = ws;
window.playerMoves = playerMoves;
window.useEventListener = useEventListener;
window.Monkeys = Monkeys;
window.Score = Score;
window.Dialog = Dialog;
window.Exceptions = Exceptions;
