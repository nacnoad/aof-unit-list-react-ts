import React from 'react';
import App from './app';
import { render, screen } from '@testing-library/react';

test('App renders without crushing ', () => {
  render(<App />);

  const home = screen.getByTestId('home');
  const units = screen.getByText(/Units/i);

  expect(units).toBeInTheDocument();
  expect(home).toBeInTheDocument();
});
