import React from 'react';
import { render, screen } from '@testing-library/react';
import Detail from './Detail';
import { Provider } from 'react-redux';
import { store } from '../../../storage/store';

test('renders detail without crashing', () => {
  render(
    <Provider store={store}>
      <Detail match={{ params: { unitId: '1' } }} />
    </Provider>
  );
  const linkElement = screen.getByText(/details page/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders detail and empty costs without crashing', () => {
  render(
    <Provider store={store}>
      <Detail match={{ params: { unitId: '40' } }} />
    </Provider>
  );
  const linkElement = screen.getByText(/details page/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders detail and arrays without crashing', () => {
  render(
    <Provider store={store}>
      <Detail match={{ params: { unitId: '83' } }} />
    </Provider>
  );
  const linkElement = screen.getByText(/details page/i);
  expect(linkElement).toBeInTheDocument();
});
