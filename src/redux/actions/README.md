# Actions

> 所有 Redux Action 集合。(空文件为目录占位符，有其他内容后去掉)

## 命名规定

- `*.action.ts`: 所有同步 Action, 或者 ((同步 + 异步 <= 5) || (同步 + 异步 => 文件内容小于 200 行)) 个可以放在一起
- `*.action.async.ts`: 不满足放到同步 Action 拆分出的所有异步 Action
