import { useReducer, useEffect, useRef, useCallback } from 'react';

const initialState = {
  exceptions: [],
  players: []
};

const gameReducer = (state, action) => {
  var entity = action.by
  entity.x = entity.x*action.boundaries.width
  entity.y = entity.y*action.boundaries.height

 if(entity["self?"]){

    let newPlayer = { ...entity, active: true }
    return {
      ...state,
      players: [
        ...state.players,
        newPlayer
      ]
    };

  }else if (entity["player?"]){

   const objIndex = state.players.findIndex(obj => obj.id === entity.id);
   if (objIndex !== -1) {
     const clonePlayers = JSON.parse(JSON.stringify(state.players));
     //check if player need to be seen in the screen if not remove from players
     if (!entity.show) {
       clonePlayers.splice(objIndex, 1);
       return {
         ...state,
         players: clonePlayers
       }
     }
     //check if player hit boundaries and add animation
     entity.collision ? clonePlayers[objIndex].shake = true : clonePlayers[objIndex].shake = false

     //change player coordinates on screen
     clonePlayers[objIndex].x = entity.x;
     clonePlayers[objIndex].y = entity.y;
     clonePlayers[objIndex].score = entity.score;
     return {
       ...state,
       players: clonePlayers
     }
   }
   return {
     ...state,
     players: [
       ...state.players,
       entity
     ]
   };
 }else if(entity["exception?"]){

    const exceptionIndex = state.exceptions.findIndex(obj => obj.exceptionType === entity.exceptionType);

    if (exceptionIndex !== -1) {
      const cloneExceptions = JSON.parse(JSON.stringify(state.exceptions));
      if (!entity.show) {
        cloneExceptions.splice(exceptionIndex, 1);
        return {
          ...state,
          exceptions: cloneExceptions
        }
      }
    }
    if(!entity.show) return {...state}
    return {
      ...state,
      exceptions: [...state.exceptions, entity]
    };

  }else{
    throw new Error();
  }

};

export const useWebSocket = (url, boundaries) => {
  const [messages, dispatch] = useReducer(gameReducer, initialState);
  const webSocket = useRef(null);

  useEffect(() => {
    webSocket.current = new WebSocket(url);
    webSocket.current.onmessage = (event) => {
      const parseData = JSON.parse(event.data);
     // const [wsInfo] = Object.getOwnPropertyNames(parseData)
      dispatch({  by: parseData, boundaries: boundaries.current });
    };

  }, [url]);


  useEffect(() => {
    webSocket.current.onopen = () => {
      webSocket.current.send(JSON.stringify(boundaries.current))
    }
    return () => {
      webSocket.current.onclose = (e) => {
        console.log('e',e)
      }
    };
  }, [boundaries]);

  const sendMessage = useCallback(message => {
    if (!message) return
    webSocket.current.send(JSON.stringify(message));
  }, [webSocket]);

  return [messages, sendMessage,webSocket.current]
};
