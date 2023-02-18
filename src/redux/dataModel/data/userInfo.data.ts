// 用户数据模型
export interface iUserInfoData {
  readonly AccessToken: string;
  readonly Avatar: string; // 头像
  readonly Email: string; // 邮箱
  readonly GitlabAccessToken: string; // gitlab access token
  readonly FullName: string; // 全名
  readonly Name: string; // 显示名称
  readonly userNickname: string; // 用户昵称
  readonly Identity: string; // 职业
  readonly School: string; // 学校
  readonly Organization: string; // 组织
  readonly HavanaId: string; // ...
  readonly OrgRoleMap: unknown; // 暂未用到
  readonly Roles: unknown; // 暂未用到
}
