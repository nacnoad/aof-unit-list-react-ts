import { unitReducer } from './reducer';
import {
  GetUnitError,
  GET_UNIT_START,
  GET_ALL_UNIT_ERROR,
  GET_UNIT_ERROR,
  GetAllUnitError,
  GetFilteredUnitError,
  GET_FILTERED_UNIT_ERROR,
} from './types';

it('should handle GET_UNIT_ERROR', () => {
  const errorAction: GetUnitError = { type: GET_UNIT_ERROR, payload: 'Error' };
  expect(unitReducer({}, errorAction)).toEqual({
    isLoading: false,
    error: 'Error',
    hasError: true,
  });
});

it('should handle GET_ALL_UNIT_ERROR', () => {
  const errorAction: GetAllUnitError = { type: GET_ALL_UNIT_ERROR, payload: 'Error' };
  expect(unitReducer({}, errorAction)).toEqual({
    isLoading: false,
    error: 'Error',
    hasError: true,
  });
});

it('should handle GET_FILTERED_UNIT_ERROR', () => {
  const errorAction: GetFilteredUnitError = { type: GET_FILTERED_UNIT_ERROR, payload: 'Error' };
  expect(unitReducer({}, errorAction)).toEqual({
    isLoading: false,
    error: 'Error',
    hasError: true,
  });
});
