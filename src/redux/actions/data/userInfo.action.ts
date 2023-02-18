import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { iUserInfoData } from '@DataModel/data/userInfo.data';

import * as RootStateAction from '@Actions/state/rootState.action';

// 用户信息相关 Action 前缀
const UserInfoDataActionPrefix = 'data/globalData/userInfo';

// 更改用户信息
export const ActionUpdateUserInfo = createAction<iUserInfoData>(`${UserInfoDataActionPrefix}/update`);

// 异步获取用户信息
export const ActionAsyncGetUserInfo = createAsyncThunk<unknown, unknown>(
  `${UserInfoDataActionPrefix}/asyncToGetUserInfo`,
  async (_, thunkAPI) => {
    try {
      // TODO: API 相关实现
      // const userInfo = await GetUserInfo<iUserInfoRes>();
      const userInfo = {};
      const { Code, Data } = userInfo as any;
      if (Code === 200 && Data) {
        // 更新用户数据
        thunkAPI.dispatch(
          ActionUpdateUserInfo({
            ...Data,
            userNickname: Data.user_nickname || '',
          }),
        );
        // 成功获取用户数据后，更改用户登录状态为已登录
        thunkAPI.dispatch(RootStateAction.ActionUpdateUserLogged(true));
      }
    } catch (e) {
      // 用户未登录、发生错误，打印日志既可
      console.error('ActionAsyncGetUserInfo Error:', e);
    }
  },
);
