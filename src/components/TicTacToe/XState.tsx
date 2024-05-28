import React from 'react';

function XState() {
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div style={{backgroundColor: 'var(--x-color)'}} className='absolute w-9/12 h-5 rotate-45'></div>
            <div style={{backgroundColor: 'var(--x-color)', transform: 'rotate(-45deg)'}} className='absolute w-9/12 h-5'></div>
        </div>
    );
}

export default XState;