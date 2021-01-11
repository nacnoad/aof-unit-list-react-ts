import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import List from './List';
import { constant } from '../../../helpers/constant';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../../storage/store';

test('renders list without crashing', () => {
  render(
    <Provider store={store}>
      <List />
    </Provider>
  );
  const linkElement = screen.getByText(/units page/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders heading', () => {
  render(
    <Provider store={store}>
      <List />
    </Provider>
  );
  const linkElement = screen.getByRole('heading');
  expect(linkElement).toBeInTheDocument();
});

test('renders age label', () => {
  render(
    <Provider store={store}>
      <List />
    </Provider>
  );
  const linkElement = screen.getByText('Ages');
  expect(linkElement).toBeInTheDocument();
});

test('renders buttons', () => {
  render(
    <Provider store={store}>
      <List />
    </Provider>
  );
  const linkElement = screen.getAllByRole('button');
  expect(linkElement.length).toBe(5);
});

test('check button texts', () => {
  render(
    <Provider store={store}>
      <List />
    </Provider>
  );
  const linkElement = screen.getAllByRole('button');
  linkElement.forEach((le) => {
    expect(
      Object.values(constant.age).some((e) => {
        if (le.textContent !== 'All') {
          return e == le.textContent;
        } else if (le.textContent == 'All') {
          return true;
        }
      })
    ).toBe(true);
  });
});

test('renders age label', () => {
  render(
    <Provider store={store}>
      <List />
    </Provider>
  );
  const linkElement = screen.getAllByText('Costs');
  expect(linkElement.length).toBe(2);
});

test('renders checkboxes', () => {
  render(
    <Provider store={store}>
      <List />
    </Provider>
  );
  const linkElement = screen.getAllByRole('checkbox');
  expect(linkElement.length).toBe(3);
});

test('checkbox onChange', () => {
  render(
    <Provider store={store}>
      <List />
    </Provider>
  );
  const checkboxes = screen.getAllByRole('checkbox');
  checkboxes.forEach((checkbox) => {
    userEvent.click(checkbox);
    expect((checkbox as HTMLInputElement).checked).toBe(true);
  });
});

test('buttons onclick ', () => {
  render(
    <Provider store={store}>
      <List />
    </Provider>
  );
  const linkElement = screen.getAllByRole('button');
  linkElement.forEach((element) => {
    userEvent.click(element);
  });
});

it('slider onChange', async () => {
  render(
    <Provider store={store}>
      <List />
    </Provider>
  );

  const checkbox = screen.getAllByRole('checkbox')[0];
  userEvent.click(checkbox);
  expect((checkbox as HTMLInputElement).checked).toBe(true);

  const sliderInput = screen.getByTestId('slider');

  sliderInput.getBoundingClientRect = jest.fn(() => {
    return {
      width: 100,
      height: 10,
      bottom: 10,
      left: 0,
    };
  });

  expect(sliderInput).toBeInTheDocument();

  await fireEvent.mouseDown(sliderInput, { clientX: 0, clientY: 20 });
});
