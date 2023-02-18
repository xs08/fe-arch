import React from 'react';
import { onRouteChangeHandler } from '@Tracking/trackingLog';
import { appStore, ReduxProvider } from '@Redux/store';

// 移动端需要引入 REM 相关工具;
(async function H5Import() {
  if (window.BUILD_APP === 'h5') {
    require.resolve('@Utils/rem.utils');
  }
})();

// 路由变化发送 PV 日志
export function onRouteChange() {
  onRouteChangeHandler();
}

// 包括 Redux
export function rootContainer(container: any) {
  // @ts-expect-error ignore child declare
  return React.createElement(ReduxProvider, { store: appStore }, container);
}
