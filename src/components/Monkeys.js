import React from 'react';
import Monkey from './Monkey.js'
const Monkeys = ({players}) => {
    return (
          players.map(player =><Monkey key={player.id} {...player} />)
    );
}
export default Monkeys