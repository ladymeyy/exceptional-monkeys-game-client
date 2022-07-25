const STEP = 0.1;
const NOSTEP = 0

const HOST= process.env.NODE_ENV === 'production' ? window.location.host : 'localhost:8080'

export const ws = `ws://${HOST}/`
export const keyToPlayerStep= {
  "ArrowRight": { stepY: NOSTEP, stepX: STEP },
  "ArrowLeft" : { stepY: NOSTEP, stepX: -STEP },
  "ArrowUp"   : { stepY: STEP, stepX: NOSTEP },
  "ArrowDown" : { stepY: -STEP, stepX: NOSTEP }
}
