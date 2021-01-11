export const GET_ALL_UNIT_START = 'GET_ALL_UNIT_START';
export const GET_ALL_UNIT_SUCCESS = 'GET_ALL_UNIT_SUCCESS';
export const GET_ALL_UNIT_ERROR = 'GET_ALL_UNIT_ERROR';
export const GET_FILTERED_UNIT_START = 'GET_FILTERED_UNIT_START';
export const GET_FILTERED_UNIT_SUCCESS = 'GET_FILTERED_UNIT_SUCCESS';
export const GET_FILTERED_UNIT_ERROR = 'GET_FILTERED_UNIT_ERROR';
export const GET_UNIT_START = 'GET_UNIT_START';
export const GET_UNIT_SUCCESS = 'GET_UNIT_SUCCESS';
export const GET_UNIT_ERROR = 'GET_UNIT_ERROR';

export interface IUnitCost {
  [key: string]: any;
}

export interface IUnit {
  id: number;
  name: string;
  description: string;
  expansion: string;
  age: string;
  cost: IUnitCost | null;
  build_time?: number;
  reload_time?: number;
  attack_delay?: number;
  movement_rate?: number;
  line_of_sight?: number;
  hit_points: number;
  range?: number | string;
  attack?: number;
  armor: string;
  attack_bonus?: string[];
  armor_bonus?: string[];
  blast_radius?: number;
  search_radius?: number;
  accuracy?: string;
}

export interface UnitState {
  units: IUnit[];
  isLoading: boolean;
  hasError: boolean;
  error: string;
}

export interface ICostData {
  costType: string;
  min: number;
  max: number;
}

export interface IFilterPayload {
  age: string | null;
  costs: ICostData[];
}

export interface GetUnitStart {
  type: typeof GET_UNIT_START;
  payload: number;
}

interface GetUnitSuccess {
  type: typeof GET_UNIT_SUCCESS;
  payload: IUnit;
}

export interface GetUnitError {
  type: typeof GET_UNIT_ERROR;
  payload: string;
}

export interface GetAllUnitStart {
  type: typeof GET_ALL_UNIT_START;
}

interface GetAllUnitSuccess {
  type: typeof GET_ALL_UNIT_SUCCESS;
  payload: IUnit[];
}

export interface GetAllUnitError {
  type: typeof GET_ALL_UNIT_ERROR;
  payload: string;
}

export interface GetFilteredUnitStart {
  type: typeof GET_FILTERED_UNIT_START;
  payload: IFilterPayload;
}

interface GetFilteredUnitSuccess {
  type: typeof GET_FILTERED_UNIT_SUCCESS;
  payload: IUnit[];
}

export interface GetFilteredUnitError {
  type: typeof GET_FILTERED_UNIT_ERROR;
  payload: string;
}

export type UnitActionTypes =
  | GetUnitStart
  | GetUnitSuccess
  | GetUnitError
  | GetAllUnitSuccess
  | GetAllUnitError
  | GetAllUnitStart
  | GetFilteredUnitError
  | GetFilteredUnitStart
  | GetFilteredUnitSuccess;
