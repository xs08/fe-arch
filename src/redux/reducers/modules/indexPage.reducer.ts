import { createReducer } from '@reduxjs/toolkit';
import { iIndexPageModel } from '@DataModel/modules/indexPage';

// 初始 someModule 数据
export const initIndexPage: iIndexPageModel = {
  data: {},
  state: {},
};

// IndexPage Reducer
export const IndexPageReducer = createReducer(initIndexPage, () => {});
