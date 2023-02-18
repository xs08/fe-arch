import { createReducer } from '@reduxjs/toolkit';
import { iSomeModuleModel } from '@DataModel/modules/someModule';

// 初始 someModule 数据
export const initSomeModule: iSomeModuleModel = {
  data: {},
  state: {},
};

// SomeModule Reducer
export const SomeModuleReducer = createReducer(initSomeModule, () => {});
