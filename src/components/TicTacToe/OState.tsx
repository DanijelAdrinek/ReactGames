import React from 'react';

/**
 * Component that renders an O in the center of the component
 * 
 * @param opacity - number between 0 and 1 to describe how visible the component is
 * @returns 
 */
export function OState({opacity = 1}: {opacity?: number}) {
    return (
        <div style={{ opacity: opacity }} className='w-full h-full flex justify-center items-center' data-testid="o-state">
            <div style={{border: '1.25rem solid var(--o-color)'}} className='absolute w-9/12 h-3/4 rounded-full'></div>
        </div>
    );
}

export default OState;