import React from 'react';

type ScorePropos = {
    score: number;
    text: string;
    backgroundColor: string;
}

function Score({score, text, backgroundColor} : ScorePropos) {
    return (
        <article>
            <div>{text}</div>
            <div>{score}</div>
        </article>
    );
}

export default Score;