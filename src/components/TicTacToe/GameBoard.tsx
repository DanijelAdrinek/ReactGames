import React from 'react';
import Cell from './Cell';
import { POSSIBLE_CELL_STATES } from '@/constants';

export function GameBoard() {
    return (
        <div style={{width: '574px', height: '574px'}} className='grid-cols-3 gap-3 grid' data-testid="gameBoard">
            <Cell initialCellState={POSSIBLE_CELL_STATES.X_STATE}></Cell>
            <Cell initialCellState={POSSIBLE_CELL_STATES.O_STATE}></Cell>
            <Cell initialCellState={POSSIBLE_CELL_STATES.EMPTY}></Cell>
            <Cell initialCellState={POSSIBLE_CELL_STATES.EMPTY}></Cell>
            <Cell initialCellState={POSSIBLE_CELL_STATES.EMPTY}></Cell>
            <Cell initialCellState={POSSIBLE_CELL_STATES.EMPTY}></Cell>
            <Cell initialCellState={POSSIBLE_CELL_STATES.EMPTY}></Cell>
            <Cell initialCellState={POSSIBLE_CELL_STATES.EMPTY}></Cell>
            <Cell initialCellState={POSSIBLE_CELL_STATES.EMPTY}></Cell>
        </div>
    );
}

export default GameBoard;