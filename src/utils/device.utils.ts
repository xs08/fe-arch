// Device 设备相关工具

// 判断移动端 OR PC 端
export const getDeviceType = (): 'pc' | 'mobile' => {
  if (navigator && navigator.userAgent) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      return 'mobile';
    }
    return 'pc';
  }

  // 默认 PC 端
  return 'pc';
};
