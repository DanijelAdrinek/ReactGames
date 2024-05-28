import React from 'react';
import Cell from './Cell';
import { POSSIBLE_CELL_STATES } from '@/constants';

function GameBoard() {
    return (
        <div style={{width: '574px', height: '574px'}} className='grid-cols-3 gap-3 grid'>
            <Cell cellState={POSSIBLE_CELL_STATES.X_STATE}></Cell>
            <Cell cellState={POSSIBLE_CELL_STATES.O_STATE}></Cell>
            <Cell cellState={POSSIBLE_CELL_STATES.EMPTY}></Cell>
            <Cell cellState={POSSIBLE_CELL_STATES.EMPTY}></Cell>
            <Cell cellState={POSSIBLE_CELL_STATES.EMPTY}></Cell>
            <Cell cellState={POSSIBLE_CELL_STATES.EMPTY}></Cell>
            <Cell cellState={POSSIBLE_CELL_STATES.EMPTY}></Cell>
            <Cell cellState={POSSIBLE_CELL_STATES.EMPTY}></Cell>
            <Cell cellState={POSSIBLE_CELL_STATES.EMPTY}></Cell>
        </div>
    );
}

export default GameBoard;