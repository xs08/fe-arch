// root state
export interface iRootState {
  readonly appType: 'pc' | 'h5'; //  应用类型
  readonly userLogged: boolean; // 用户是否已经登录
}
