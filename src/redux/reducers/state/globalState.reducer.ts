import { combineReducers } from '@reduxjs/toolkit';
import { iGlobalState } from '@DataModel/state/global.state';

import { RootStateReducer } from './rootState.reducer';

// Global State Reducer
export const GlobalStateReducer = combineReducers<iGlobalState>({
  rootState: RootStateReducer,
});
