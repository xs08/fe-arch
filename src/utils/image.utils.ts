//  Image 相关工具

// 图像加载
export const loadedImageLink = async (src: string) => {
  return new Promise<string>((resolve) => {
    const image = new Image();
    image.onload = () => {
      resolve(src);
    };

    image.src = src;
  });
};
