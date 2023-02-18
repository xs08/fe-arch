import { resolve } from 'path';
import { env } from 'process';
import { defineConfig } from 'umi';

import { plugins } from './plugins';
import proxyConfig from './config.proxy';
import { PCConfig } from './config.pc';
import { H5Config } from './config.h5';

// 解析路径，指定 SRC 目录下
const resolvePath = (path: string, base = `${__dirname}/../`) => resolve(base, path);

// 环境变量
const BUILD_APP = (env.BUILD_APP || 'pc') as 'pc' | 'h5';
const BUILD_ENV = (env.BUILD_ENV || 'dev') as 'dev' | 'beta' | 'prod';

// ts configFile
const tsConfigFile = resolvePath('./tsconfig.json');

// 区分设备配置
const configMap = {
  pc: PCConfig,
  h5: H5Config,
};

// 导出默认配置
export default defineConfig({
  npmClient: 'yarn',
  // 开发配置
  history: { type: 'browser' },
  proxy: proxyConfig,
  alias: {
    /* eslint-disable @typescript-eslint/naming-convention */
    '@Apis': resolvePath('src/api'),
    '@Assets': resolvePath('src/assets'),
    '@Components': resolvePath('src/components'),
    '@Events': resolvePath('src/events'),
    '@Hooks': resolvePath('src/hooks'),
    '@Layouts': resolvePath('src/layouts'),
    '@Styles': resolvePath('src/styles'),
    '@Tracking': resolvePath('src/tracking'),
    '@Utils': resolvePath('src/utils'),
    '@Redux': resolvePath('src/redux'),
    '@Actions': resolvePath('src/redux/actions'),
    '@DataModel': resolvePath('src/redux/dataModel'),
    '@DataHooks': resolvePath('src/redux/hooks'),
    /* eslint-enable @typescript-eslint/naming-convention */
  },
  conventionRoutes: {
    // page 下不需要识别为路由的部分
    exclude: [/\/components\//, /\/README\//],
  },
  verifyCommit: {
    scope: ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci', 'chore', 'revert'],
    allowEmoji: true,
  },
  // 构建配置
  define: {
    BUILD_APP: env.BUILD_APP,
    BUILD_ENV: env.BUILD_ENV,
  },
  ignoreMomentLocale: false, // 关闭 Moment Local 文件
  // prod: false, beta: sourceMap, dev: eval
  devtool: BUILD_ENV === 'prod' ? false : BUILD_ENV === 'beta' ? 'source-map' : 'eval',
  forkTSChecker: {
    async: BUILD_ENV === 'dev', // 异步检测代码: 开发环境异步，否则影响编译完成退出的时间
    typescript: {
      configFile: tsConfigFile, // 指定 tsconfig 配置
    },
  },
  // hash: true, // 生成产物附带 Hash
  // 区分设备配置
  outputPath: `build/${BUILD_APP}`,
  chainWebpack: plugins[BUILD_APP],
  ...configMap[BUILD_APP],
  // 预发、生产构建兼容性设置
  ...(BUILD_ENV !== 'dev'
    ? {
        codeSplitting: { jsStrategy: 'granularChunks' }, // 通用代码拆分策略
        phantomDependency: {},
      }
    : {}),
  ...(BUILD_ENV === 'beta'
    ? {
        analyze: { analyzerMode: 'server' },
      }
    : {}),
});
