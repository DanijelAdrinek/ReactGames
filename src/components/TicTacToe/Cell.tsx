import React from 'react';
import XState from './XState';
import OState from './OState';
import { POSSIBLE_CELL_STATES } from '@/constants';

type CellState = typeof POSSIBLE_CELL_STATES[keyof typeof POSSIBLE_CELL_STATES];

type CellProps = {
    cellState: CellState;
}

const CellStateToComponent: Record<CellState, JSX.Element | null> = {
    [POSSIBLE_CELL_STATES.EMPTY]: null,
    [POSSIBLE_CELL_STATES.X_STATE]: <XState/>,
    [POSSIBLE_CELL_STATES.O_STATE]: <OState/> 
}

function Cell({cellState} : CellProps) {
    return (
        <div className='bg-slate-500 relative'>
            {CellStateToComponent[cellState]}
        </div>
    );
}

export default Cell;