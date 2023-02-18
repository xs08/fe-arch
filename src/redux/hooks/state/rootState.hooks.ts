import { useAppSelector } from '../base.hooks';

// 获取 APP 类型
export const useAppType = () => {
  const appType = useAppSelector((state) => state.globalState.rootState.appType);
  return appType;
};

// 获取 用户是否登录
export const useUserLogged = () => {
  const userLogged = useAppSelector((state) => state.globalState.rootState.userLogged);
  return userLogged;
};
