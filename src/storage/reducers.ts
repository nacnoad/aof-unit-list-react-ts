import { combineReducers } from 'redux';
import { unitReducer } from './unit/reducer';

export const rootReducer = combineReducers({
  unit: unitReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
