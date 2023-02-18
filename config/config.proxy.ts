/* eslint-disable @typescript-eslint/naming-convention */
import { IConfig } from '@umijs/preset-umi';

// 代理配置
export default {
  '/proxyApi': {
    target: 'http://proxyApi.com',
    changeOrigin: true,
  },
} as IConfig['proxy'];
