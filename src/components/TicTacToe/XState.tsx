import React from 'react';

/**
 * Component that renders an X in the center of the component
 * 
 * @param opacity - number between 0 and 1 to describe how visible the component is
 * @returns 
 */
export function XState({opacity = 1}: {opacity?: number}) {
    return (
        <div style={{ opacity: opacity }} className='w-full h-full flex justify-center items-center xstate-test' data-testid="x-state">
            <div style={{backgroundColor: 'var(--x-color)'}} className='absolute w-9/12 h-5 rotate-45'></div>
            <div style={{backgroundColor: 'var(--x-color)', transform: 'rotate(-45deg)'}} className='absolute w-9/12 h-5'></div>
        </div>
    );
}

export default XState;