import { useAppSelector } from '../base.hooks';

// 获取 用户名称
export const useUserName = () => {
  const userName = useAppSelector((state) => state.globalData.userInfo.Name);
  return userName;
};

// 获取 用户头像
export const useUserAvatar = () => {
  const userAvatar = useAppSelector((state) => state.globalData.userInfo.Avatar);
  return userAvatar;
};
