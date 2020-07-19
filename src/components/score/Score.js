import React from 'react';
const Score = ({ players }) => {
    return (
        players.map(player => {
            return (
                <div key={player.id}>
                    {player.active ? "You" : player.exceptionType} - {player.score}
                </div>
            )
        }))
}
export default Score