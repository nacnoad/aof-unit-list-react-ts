import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CheckboxSlider from './index';
import userEvent from '@testing-library/user-event';
import { Slider } from '@material-ui/core';

test('renders checkbox without crashing', () => {
  render(
    <CheckboxSlider
      key={2}
      min={0}
      max={200}
      minVal={0}
      maxVal={200}
      isSliderActive={false}
      text={'Gold'}
      name={'gold'}
      onCostActivityChange={(data: boolean, key: string) => {
        return 0;
      }}
      handleCostChange={(data: number | number[], key: string) => {
        return 0;
      }}
    />
  );
  const text = screen.getByText('Gold');
  expect(text).toBeInTheDocument();
});

test('renders checkbox label free without crashing', () => {
  render(
    <CheckboxSlider
      key={2}
      min={0}
      max={200}
      minVal={0}
      maxVal={200}
      isSliderActive={false}
      text={''}
      name={'gold'}
      onCostActivityChange={(data: boolean, key: string) => {
        return 0;
      }}
      handleCostChange={(data: number | number[], key: string) => {
        return 0;
      }}
    />
  );
  const text = screen.queryByText('Gold');
  expect(text).toBeNull();
});

test('renders checkbox min and max text without crashing', () => {
  render(
    <CheckboxSlider
      key={2}
      min={0}
      max={200}
      minVal={5}
      maxVal={200}
      isSliderActive={true}
      text={'Gold'}
      name={'gold'}
      onCostActivityChange={(data: boolean, key: string) => {
        return 0;
      }}
      handleCostChange={(data: number | number[], key: string) => {
        return 0;
      }}
    />
  );
  const valueText = screen.getByText('5 - 200');
  const text = screen.getByText('Gold');
  expect(valueText).toBeInTheDocument();
  expect(text).toBeInTheDocument();
});

test('should not render checkbox min and max value without crashing', () => {
  render(
    <CheckboxSlider
      key={2}
      min={0}
      max={200}
      minVal={0}
      maxVal={200}
      isSliderActive={false}
      text={'Gold'}
      name={'gold'}
      onCostActivityChange={(data: boolean, key: string) => {
        return 0;
      }}
      handleCostChange={(data: number | number[], key: string) => {
        return 0;
      }}
    />
  );
  const valueText = screen.queryByText('110 - 200');
  const text = screen.getByText('Gold');
  expect(valueText).toBeNull();
  expect(text).toBeInTheDocument();
});

test('checkbox onChange', () => {
  const onCostActivityChange = jest.fn();
  const handleCostChange = jest.fn();
  render(
    <CheckboxSlider
      key={2}
      min={0}
      max={200}
      minVal={0}
      maxVal={200}
      isSliderActive={false}
      text={'Gold'}
      name={'gold'}
      onCostActivityChange={onCostActivityChange}
      handleCostChange={handleCostChange}
    />
  );
  const checkbox = screen.getByRole('checkbox');
  userEvent.click(checkbox);
  expect(onCostActivityChange).toHaveBeenCalledTimes(1);
  expect((checkbox as HTMLInputElement).checked).toBe(true);
});

it('slider onChange', async () => {
  const onCostActivityChange = jest.fn();
  const handleCostChange = jest.fn();
  render(
    <CheckboxSlider
      key={2}
      min={0}
      max={200}
      minVal={0}
      maxVal={200}
      isSliderActive={true}
      text={'Gold'}
      name={'gold'}
      onCostActivityChange={onCostActivityChange}
      handleCostChange={handleCostChange}
    />
  );

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

  await fireEvent.mouseDown(sliderInput, { clientX: 162, clientY: 302 });

  expect(handleCostChange).toHaveBeenCalledTimes(1);
});
