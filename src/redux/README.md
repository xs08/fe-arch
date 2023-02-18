# Redux

> Redux 用于处理页面中 Redux 数据流

## 结构

- `redux.type.ts`: 用于定义 Redux 中用到的数据类型定义，比如: actionType
- `actions`: 分层 Action 数据定义, 每个次级文件为一个模块的 Action 定义
- `constants`: 分层 Constant 数据定义, 每个次级文件为一个模块的 Constant 定义
- `reducers`: 分层 Reducer 数据定义, 每个次级文件为一个模块的 Reducer 定义
- `sagas`: 分层 Saga 数据定义，主要用于 API 数据交互, 每个次级文件为一个模块的 Saga 定义
- `dataHooks`: 分层数据 Hooks 定义，每个次级文件为一个模块的数据 Hooks 定义
