import { combineReducers } from '@reduxjs/toolkit';
import { iGlobalData } from '@DataModel/data/global.data';

import { UserInfoReducer } from './userInfoData.reducer';

// Global Data Reducer
export const GlobalDataReducer = combineReducers<iGlobalData>({
  userInfo: UserInfoReducer,
});
