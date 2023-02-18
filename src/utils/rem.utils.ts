(function calcRootRem(doc, win) {
  // document文档对象
  const docEl = doc.documentElement;
  // 窗口旋转或者大小改变 事件
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

  const calcRem = () => {
    const { clientWidth } = docEl;
    if (!clientWidth) return;
    // 1rem 就是 50px (对于宽度是375px的设备来说) === 物理像素的100px 优点就是在设备宽度是375的设备上 我们的 rem的值可以直接
    // 使用设计稿的像素/100即可
    docEl.style.fontSize = `${100 * (clientWidth / 750)}px`;
  };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, calcRem, false); // 绑定窗口变化事件（设置根字体）
  doc.addEventListener('DOMContentLoaded', calcRem, false); // 绑定页面装载成功的事件（设置根字体）
})(document, window);
