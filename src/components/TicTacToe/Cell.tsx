"use client";

import React, { useState } from 'react';
import XState from './XState';
import OState from './OState';
import { POSSIBLE_CELL_STATES } from '@/constants';

type CellState = typeof POSSIBLE_CELL_STATES[keyof typeof POSSIBLE_CELL_STATES];

type CellProps = {
    initialCellState: CellState;
}

//
const CellStateToComponent: Record<CellState, (opacity: number) => JSX.Element | null> = {
    [POSSIBLE_CELL_STATES.EMPTY]: () => null,
    [POSSIBLE_CELL_STATES.X_STATE]: (opacity: number) => <XState opacity={opacity} />,
    [POSSIBLE_CELL_STATES.O_STATE]: (opacity: number) => <OState opacity={opacity} />
}

export function Cell({initialCellState} : CellProps) {
    const [isTaken, setIsTaken] = useState(false);
    const [opacity, setOpacity] = useState(1);
    const [cellState, setCellState] = useState(initialCellState);

    const handleMouseLeave = () => {
        if (isTaken) {return;}

        setOpacity(1);
    }

    const handleHover = () => {
        if (isTaken) {return;}

        setOpacity(0.5);
    };


    const handleClick = () => {
        setOpacity(1);
        setIsTaken(true);
    }

    return (
        <div onClick={handleClick} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}  className='bg-slate-500 relative'>
            {CellStateToComponent[cellState](opacity)}
        </div>
    );
}

export default Cell;