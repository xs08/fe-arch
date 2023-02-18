import { IConfig } from '@umijs/preset-umi';

// PC 构建配置
export const H5Config: IConfig = {
  // 通用配置
  metas: [],
  headScripts: [],
  links: [],
  // postcss config
  extraPostCSSPlugins: ['postcss-import', 'postcss-nested', 'postcss-preset-env'],
  // 路由
  routes: [
    { path: '/', component: 'index' },
    { path: '/docs', component: 'docs' },
  ],
};
