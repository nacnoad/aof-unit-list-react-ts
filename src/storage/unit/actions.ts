import {
  IUnit,
  UnitActionTypes,
  GET_UNIT_START,
  GET_UNIT_SUCCESS,
  GET_UNIT_ERROR,
  GET_ALL_UNIT_SUCCESS,
  GET_ALL_UNIT_START,
  GET_ALL_UNIT_ERROR,
  GET_FILTERED_UNIT_START,
  GET_FILTERED_UNIT_ERROR,
  GET_FILTERED_UNIT_SUCCESS,
  IUnitCost,
  ICostData,
} from './types';

export function getUnitStart(id: number): UnitActionTypes {
  return {
    type: GET_UNIT_START,
    payload: id,
  };
}

export function getUnitSuccess(units: IUnit): UnitActionTypes {
  return {
    type: GET_UNIT_SUCCESS,
    payload: units,
  };
}

export function getUnitError(error: string): UnitActionTypes {
  return {
    type: GET_UNIT_ERROR,
    payload: error,
  };
}

export function getAllUnitStart(): UnitActionTypes {
  return {
    type: GET_ALL_UNIT_START,
  };
}

export function getAllUnitSuccess(units: IUnit[]): UnitActionTypes {
  return {
    type: GET_ALL_UNIT_SUCCESS,
    payload: units,
  };
}

export function getAllUnitError(error: string): UnitActionTypes {
  return {
    type: GET_ALL_UNIT_ERROR,
    payload: error,
  };
}

export function getFilteredUnitStart(age: string | null, costs: ICostData[]): UnitActionTypes {
  return {
    type: GET_FILTERED_UNIT_START,
    payload: {
      age: age,
      costs: costs,
    },
  };
}

export function getFilteredUnitSuccess(units: IUnit[]): UnitActionTypes {
  return {
    type: GET_FILTERED_UNIT_SUCCESS,
    payload: units,
  };
}

export function getFilteredUnitError(error: string): UnitActionTypes {
  return {
    type: GET_FILTERED_UNIT_ERROR,
    payload: error,
  };
}
