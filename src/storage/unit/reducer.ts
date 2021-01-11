import {
  UnitState,
  UnitActionTypes,
  GET_UNIT_START,
  GET_UNIT_SUCCESS,
  GET_UNIT_ERROR,
  GET_ALL_UNIT_START,
  GET_ALL_UNIT_SUCCESS,
  GET_ALL_UNIT_ERROR,
  GET_FILTERED_UNIT_START,
  GET_FILTERED_UNIT_ERROR,
  GET_FILTERED_UNIT_SUCCESS,
} from './types';

const initialState: UnitState = {
  units: [],
  isLoading: false,
  hasError: false,
  error: '',
};

export function unitReducer(state = initialState, action: UnitActionTypes): UnitState {
  switch (action.type) {
    case GET_UNIT_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_UNIT_SUCCESS:
      return {
        ...state,
        units: [action.payload],
        isLoading: false,
      };
    case GET_UNIT_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: action.payload,
      };
    case GET_ALL_UNIT_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALL_UNIT_SUCCESS:
      return {
        ...state,
        units: [...state.units, ...action.payload],
        isLoading: false,
      };
    case GET_ALL_UNIT_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: action.payload,
      };
    case GET_FILTERED_UNIT_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_FILTERED_UNIT_SUCCESS:
      return {
        ...state,
        units: [...action.payload],
        isLoading: false,
      };
    case GET_FILTERED_UNIT_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: action.payload,
      };
    default:
      return state;
  }
}
