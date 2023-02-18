/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { iRootState } from '@DataModel/state/root.state';

// actions
import * as rootStateActions from '@Actions/state/rootState.action';

// 初始化全局状态
export const initRootState: iRootState = {
  appType: 'pc', // default App type PC
  userLogged: false, // default not logged
};

// Root Reducer
export const RootStateReducer = createReducer(initRootState, (builder) => {
  builder
    // 更改 APP 类型
    .addCase(rootStateActions.ActionUpdateAppType, (state, action) => {
      state.appType = action.payload;
    })
    // 更改用户是否已经登录
    .addCase(rootStateActions.ActionUpdateUserLogged, (state, action) => {
      state.userLogged = action.payload;
    });
});
