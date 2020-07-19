const STEP = 10;
const NOSTEP = 0

const HOST= process.env.NODE_ENV === 'production' ? window.location.host : 'localhost:8080'

export const ws = `ws://${HOST}/`
export const playerMoves = {
  "ArrowRight": { y: `${NOSTEP}`, x: `${STEP}` },
  "ArrowLeft": { y: `${NOSTEP}`, x: `-${STEP}` },
  "ArrowUp": { y: `${STEP}`, x: `${NOSTEP}` },
  "ArrowDown": { y: `-${STEP}`, x: `${NOSTEP}` }
}