import { IConfig } from '@umijs/preset-umi';
type IChainWebpack = NonNullable<IConfig['chainWebpack']>;

import { baseWebpackPlugin } from './plugin.base';

// H5 相关插件配置
export const PCWebpackPlugin: IChainWebpack = (memo, args) => {
  baseWebpackPlugin(memo, args);
};
