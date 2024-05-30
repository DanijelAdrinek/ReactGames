import React from 'react';
import { render, screen } from '@testing-library/react';
import GameBoard from '../GameBoard';

const GameboardTestID = "gameBoard";

it("Should render GameBoard to DOM", () => {
    render(<GameBoard />);

    const GameBoardComponent = screen.getByTestId(GameboardTestID);

    expect(GameBoardComponent).toBeDefined();
});

it("Should make gameboard visible to user", () => {
    render(<GameBoard />);

    const GameBoardComponent = screen.getByTestId(GameboardTestID);

    expect(GameBoardComponent).toBeVisible();
});

it("Should render nine cells", () => {
    render(<GameBoard />);

    const GameBoardComponent = screen.getByTestId(GameboardTestID);

    expect(GameBoardComponent.children).toHaveLength(9);
});