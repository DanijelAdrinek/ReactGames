import React from 'react';
import GameBoard from './GameBoard';
import './tictactoe-styles.css';

function TicTacToe() {
    return (
        <section style={{minWidth: '600px'}} className='tictactoe w-3/6 rounded-lg bg-orange-600 flex items-center flex-col'>
            <h1>TicTacToe</h1>
            <GameBoard/>
        </section>
    );
}

export default TicTacToe;