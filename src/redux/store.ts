import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { iRootDataModel } from '@DataModel/index'; // Root Data Model

import { GlobalStateReducer } from './reducers/state/globalState.reducer'; // 全局 State Reducer
import { GlobalDataReducer } from './reducers/data/globalData.reducer'; // 全局 Data Reducer

import { IndexPageReducer } from './reducers/modules/indexPage.reducer'; // index page
import { SomeModuleReducer } from './reducers/modules/someModule.reducer'; // some module

// root Reducer
const rootReducer = combineReducers<iRootDataModel>({
  globalData: GlobalDataReducer,
  globalState: GlobalStateReducer,
  indexPage: IndexPageReducer,
  someModule: SomeModuleReducer,
});

// 应用 store
const appStore = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;

export { appStore };
export { Provider as ReduxProvider } from 'react-redux';
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
