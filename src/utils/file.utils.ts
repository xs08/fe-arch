// 文件相关 utils

// 文件转为图片链接
export const fileToImageUrl = async (file: File) => {
  return new Promise<string>((resolve) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      if (e.target && e.target.result) {
        const src = URL.createObjectURL(new Blob([e.target.result]));
        resolve(src);
        // 随后销毁
        setTimeout(() => {
          URL.revokeObjectURL(src);
        }, 1000);
      } else {
        resolve('');
      }
    };
    reader.readAsArrayBuffer(file);
  });
};
