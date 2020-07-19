
import React, { useCallback } from 'react';
import './App.css';
import { useWebSocket } from './hooks/useWebSocket'
import { useBodyBounderies } from './hooks/useBodyBounderies'
import { ws, playerMoves } from './Utils.js/Utils'
import { useEventListener } from './hooks/useEventListener'
import Monkeys from './components/Monkeys'
import Score from './components/score/Score'
import Dialog from './components/dialog/Dialog'
import Exceptions from './components/exceptions/Exceptions'

function App() {
  const bodyBounderies = useBodyBounderies()
  const [playState, sendMSG,webSocket] = useWebSocket(ws, bodyBounderies)
  const showKeyCode = useCallback(({ key }) => {
    sendMSG(playerMoves[key])
  }, [sendMSG]);
  
  useEventListener('keydown', showKeyCode);
  return (
    <>      
    { webSocket && webSocket.readyState === 1 ?
      playState.players.length === 1 ?
      <Dialog msg={'Waiting for other players to play'} />
      :
      <>
        <Score players={playState.players} />
        <Exceptions exceptions={playState.exceptions} />
        <Monkeys players={playState.players} />
      </>
      :
      <Dialog msg={'Waiting for server'} />

    }

    </>
  );
}
export default App;