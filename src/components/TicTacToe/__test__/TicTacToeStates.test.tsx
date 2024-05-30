import React from 'react';
import { render, screen } from '@testing-library/react';
import XState from '../XState';
import OState from '../OState';

const testCases = [
  { component: XState, testId: 'x-state', name: 'XState' },
  { component: OState, testId: 'o-state', name: 'OState' },
];

testCases.forEach(({ component: Component, testId, name }) => {
  describe(`${name} component`, () => {
    it(`should render the ${name} component`, () => {
      render(<Component />);
      const stateComponent = screen.getByTestId(testId);

      expect(stateComponent).toBeDefined();
    });

    it('should be visible', () => {
      render(<Component />);
      const stateComponent = screen.getByTestId(testId);

      expect(stateComponent).toBeVisible();
    });

    it('if opacity is set to 0, should not be visible', () => {
      render(<Component opacity={0} />);
      const stateComponent = screen.getByTestId(testId);

      expect(stateComponent).not.toBeVisible();
    });
  });
});