# dataModel 数据流类型定义

> dataModel 定义应用数据流

## 结构

- `index.ts`: 导出 `iRootDataModel` 包含整体 Redux 流转数据

- `state/*`: 全部 state 定义

  - `global.state`: 全局 state 定义

- `data/*`: 全部 data 定义

  - `global.data`: 全局 data 定义

- `modules/index.ts`: 全部 modules 级别数据定义, 其下二级目录为对应子模块内容定义
