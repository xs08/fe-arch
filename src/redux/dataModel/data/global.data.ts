// 引入 data 相关定义并组合到 GlobalData 内
import { iUserInfoData } from './userInfo.data';

//  全局数据定义
export interface iGlobalData {
  // readonly 类型定义都用 readonly
  readonly userInfo: iUserInfoData; // 登录后的用户信息
}
