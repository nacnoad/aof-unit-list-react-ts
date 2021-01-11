import { put } from 'redux-saga/effects';
import {
  GetUnitStart,
  GetUnitError,
  GET_UNIT_START,
  GET_UNIT_ERROR,
  GetAllUnitStart,
  GET_ALL_UNIT_ERROR,
  GetAllUnitError,
  GET_ALL_UNIT_START,
  GetFilteredUnitError,
  GetFilteredUnitStart,
  GET_FILTERED_UNIT_ERROR,
  GET_FILTERED_UNIT_START,
} from './types';
import { handleFetch, handleFetchAll, handleFetchFiltered } from './unit.sagas';

it('catch GetUnitError', () => {
  const params: GetUnitStart = { type: GET_UNIT_START, payload: 1 };
  const payload = 'An unknown error occurred.';
  const gen = handleFetch(params);
  const returnParams: GetUnitError = { type: GET_UNIT_ERROR, payload };
  gen.next();
  expect(gen.throw('An unknown error occurred.').value).toEqual(put(returnParams));
});

it('catch GetUnitError error stack', () => {
  const params: GetUnitStart = { type: GET_UNIT_START, payload: 1 };
  const err = new Error('An unknown error occurred.');
  const gen = handleFetch(params);
  const returnParams: GetUnitError = { type: GET_UNIT_ERROR, payload: err.stack?.toString() };
  gen.next();
  expect(gen.throw(err).value).toEqual(put(returnParams));
});

it('catch GetAllUnitError', () => {
  const params: GetAllUnitStart = { type: GET_ALL_UNIT_START };
  const payload = 'An unknown error occurred.';
  const gen = handleFetchAll();
  const returnParams: GetAllUnitError = { type: GET_ALL_UNIT_ERROR, payload };
  gen.next();
  expect(gen.throw('An unknown error occurred.').value).toEqual(put(returnParams));
});

it('catch GetAllUnitError error stack', () => {
  const params: GetAllUnitStart = { type: GET_ALL_UNIT_START };
  const err = new Error('An unknown error occurred.');
  const gen = handleFetchAll();
  const returnParams: GetAllUnitError = {
    type: GET_ALL_UNIT_ERROR,
    payload: err.stack?.toString(),
  };
  gen.next();
  expect(gen.throw(err).value).toEqual(put(returnParams));
});

it('catch GetFilteredUnitError', () => {
  const params: GetFilteredUnitStart = {
    type: GET_FILTERED_UNIT_START,
    payload: { age: '', costs: [] },
  };
  const payload = 'An unknown error occurred.';
  const gen = handleFetchFiltered(params);
  const returnParams: GetFilteredUnitError = { type: GET_FILTERED_UNIT_ERROR, payload };
  gen.next();
  expect(gen.throw('An unknown error occurred.').value).toEqual(put(returnParams));
});

it('catch GetFilteredUnitError error stack', () => {
  const params: GetFilteredUnitStart = {
    type: GET_FILTERED_UNIT_START,
    payload: { age: '', costs: [] },
  };
  const err = new Error('An unknown error occurred.');
  const gen = handleFetchFiltered(params);
  const returnParams: GetFilteredUnitError = {
    type: GET_FILTERED_UNIT_ERROR,
    payload: err.stack?.toString(),
  };
  gen.next();
  expect(gen.throw(err).value).toEqual(put(returnParams));
});
