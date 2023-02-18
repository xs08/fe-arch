// 引入SDK及插件
// import { parse } from 'querystring';
// import { getCookie, getRunEnv, getCurtPage } from '@Utils/browser.utils';

// 埋点事件 ID 名称
/* eslint-disable @typescript-eslint/no-unused-vars */
const EventNameList = {
  PV: '页面访问',
  EXP: '曝光', //  exp001
  CLK: '点击', // clk001
  OTHER: '其他', // other001
  SLD: '滑动', // sld001
  INPUT: '输入', // input001 输入（键盘、扫码枪、黏贴等）
  SYS: '系统事件', // sys001 系统事件（后台同步等）
  SEARCH: '搜索', // SEARCH
  REQ: '客户端发送请求',
  RES: '服务端返回请求',
  LEAVE: '页面离开',
};

// 路由切换时的上报
// TODO: 实现 PV 逻辑
let prevTime = new Date().valueOf();
let prevPath = '';
let prevPageId = '';
const onRouteChangeHandler = () => {
  const { href: curPath, pathname } = window.location;
  // 路由发生改变时
  if (prevPath !== curPath) {
    const pageId = 'pageId';
    // Report PV
    prevTime = new Date().valueOf();
    prevPath = curPath;
    prevPageId = pageId;
  }
};

// 页面退出时
// TODO: report pageLeave
window?.addEventListener('beforeunload', () => {});

export { onRouteChangeHandler };
