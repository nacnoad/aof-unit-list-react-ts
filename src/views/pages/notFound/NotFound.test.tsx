import React from 'react';
import NotFound from './NotFound';
import { screen, render } from '@testing-library/react';

test('Not found renders without crushing ', () => {
  render(<NotFound />);

  const nf = screen.getByText('404 - Not Found!');

  expect(nf).toBeInTheDocument();
});
