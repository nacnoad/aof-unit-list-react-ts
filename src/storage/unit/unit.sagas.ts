import {
  all,
  AllEffect,
  call,
  fork,
  ForkEffect,
  put,
  PutEffect,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import { data } from '../../data/mockdata';
import {
  getUnitSuccess,
  getUnitError,
  getAllUnitSuccess,
  getAllUnitError,
  getFilteredUnitSuccess,
  getFilteredUnitError,
} from './actions';
import {
  GET_UNIT_START,
  GET_ALL_UNIT_START,
  GET_FILTERED_UNIT_START,
  UnitActionTypes,
  GetUnitStart,
  GetFilteredUnitStart,
  ICostData,
  IUnitCost,
} from './types';

export function* handleFetch(action: GetUnitStart): Generator<PutEffect<UnitActionTypes>> {
  try {
    yield put(getUnitSuccess(data.filter((u) => u.id == action.payload)[0]));
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(getUnitError(err.stack));
    } else {
      yield put(getUnitError('An unknown error occurred.'));
    }
  }
}

function* watchGetRequest() {
  yield takeLatest(GET_UNIT_START, handleFetch);
}

export function* handleFetchAll(): Generator<PutEffect<UnitActionTypes>> {
  try {
    yield put(getAllUnitSuccess(data));
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(getAllUnitError(err.stack));
    } else {
      yield put(getAllUnitError('An unknown error occurred.'));
    }
  }
}

function* watchGetAllRequest() {
  yield takeLatest(GET_ALL_UNIT_START, handleFetchAll);
}

export function* handleFetchFiltered(
  action: GetFilteredUnitStart
): Generator<PutEffect<UnitActionTypes>> {
  try {
    let d = data.filter((u) => {
      return action.payload.age ? action.payload.age == u.age : true;
    });
    action.payload.costs.forEach((c) => {
      d = d.filter((u) => {
        if (u.cost && Object.keys(u.cost).indexOf(c.costType) !== -1) {
          return u.cost[c.costType] >= c.min && u.cost[c.costType] <= c.max;
        }
      });
    });
    yield put(getFilteredUnitSuccess(d));
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(getFilteredUnitError(err.stack));
    } else {
      yield put(getFilteredUnitError('An unknown error occurred.'));
    }
  }
}

function* watchGetFilteredRequest() {
  yield takeLatest(GET_FILTERED_UNIT_START, handleFetchFiltered);
}

function* unitSaga(): Generator<AllEffect<ForkEffect>> {
  yield all([fork(watchGetRequest), fork(watchGetAllRequest), fork(watchGetFilteredRequest)]);
}

export default unitSaga;
