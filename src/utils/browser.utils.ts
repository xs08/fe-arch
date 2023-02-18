// 获取 cookie 数据
export const getCookie = (name: string) => {
  const cookies = document.cookie;
  let cookiePos = cookies.indexOf(name);
  let value = '';

  if (cookiePos !== -1) {
    cookiePos = cookiePos + name.length + 1;
    let cookieEnd = cookies.indexOf(';', cookiePos);

    if (cookieEnd === -1) {
      cookieEnd = cookies.length;
    }
    value = decodeURIComponent(cookies.substring(cookiePos, cookieEnd));
  }
  return value;
};

// 获取运行时环境，默认生产环境
export const getRunEnv = () => {
  if (window.BUILD_ENV === 'dev') return 'dev';
  if (window.BUILD_ENV === 'beta') return 'beta';
  if (window.BUILD_ENV === 'prod') return 'prod';
  return 'prod';
};

// 获取构建时运行环境
export const getBuildApp = () => {
  if (window.BUILD_APP === 'pc') return 'pc';
  if (window.BUILD_APP === 'h5') return 'h5';
  return 'pc';
};
