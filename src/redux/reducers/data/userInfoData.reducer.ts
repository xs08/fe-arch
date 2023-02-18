/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { iUserInfoData } from '@DataModel/data/userInfo.data';

import * as UserInfoActions from '@Actions/data/userInfo.action';

// 初始用户数据
export const initUserInfo: iUserInfoData = {
  AccessToken: '',
  Avatar: '',
  Email: '',
  GitlabAccessToken: '',
  FullName: '',
  Name: '',
  userNickname: '',
  Identity: '',
  School: '',
  Organization: '',
  HavanaId: '',
  OrgRoleMap: '',
  Roles: '',
};

// 用户数据 Reducer
export const UserInfoReducer = createReducer(initUserInfo, (builder) => {
  builder.addCase(UserInfoActions.ActionUpdateUserInfo, (state, action) => {
    state = { ...state, ...action.payload };
  });
});
