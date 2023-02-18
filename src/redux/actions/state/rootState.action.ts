import { createAction } from '@reduxjs/toolkit';

const RootStateActionPrefix = 'state/globalState/rootState';

// 切换 APP 类型
export const ActionUpdateAppType = createAction<'pc' | 'h5'>(`${RootStateActionPrefix}/appType`);
// 切换用户是否已经登录
export const ActionUpdateUserLogged = createAction<boolean>(`${RootStateActionPrefix}/userLogged`);
