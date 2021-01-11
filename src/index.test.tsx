import ReactDOM from 'react-dom';
import App from './views/app';
import React from 'react';

jest.mock('react-dom', () => ({ render: jest.fn() }));

test('renders with App and root div', () => {
  const root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);

  require('./index.tsx');

  expect(ReactDOM.render).toHaveBeenCalledWith(<App />, root);
});
