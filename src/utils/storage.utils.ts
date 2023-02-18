// 存储管理

// 异步获取存储内容
export const getLocalStorage = (key: string) => {
  try {
    const dataJSON = window.localStorage.getItem(key);
    if (!dataJSON) {
      return null;
    }
    return JSON.parse(dataJSON);
  } catch (e) {
    console.error(e);
  }
  return null;
};

// 异步写入存储内容
export const setLocalStorage = (key: string, data: unknown) => {
  try {
    const strData = JSON.stringify(data);
    window.localStorage.setItem(key, strData);
    return key;
  } catch (e) {
    console.error(e);
  }
  return null;
};
