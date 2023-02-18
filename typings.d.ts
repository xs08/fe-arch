import 'umi/typings';

// 图片
declare module '*.bmp' {
  const src: string;
  export default src;
}

// 全局变量声明
declare global {
  interface Window {
    BUILD_ENV: 'dev' | 'beta' | 'prod'; // 构建环境变量
    BUILD_APP: 'pc' | 'h5'; // 构建应用环境变量
  }
}
