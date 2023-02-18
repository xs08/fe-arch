# Fe-Arch

> 项目整体基于 umi.js 4 进行搭建，主要包括: 运行时框架 + ts 相关配置

## 开发规范

### 基础规范

1. 开发 package 管理工具使用: `yarn`；

- 开发运行: `yarn start | yarn run dev`
- 预发构建: `yarn run build:beta:pc`
- 生产构建: `yarn run build:prod:pc`

2. 分支规范

- `master`: 线上、发布分支，不允许直接推送，只能由 beta 分支通过代码评审后合并
- `beta`: 预发分支，dev 统一提测后 merge 至 beta 分支，用作预发内容，后续预发内容变更中 beta 切新分支处理
- `dev`: 为开发日常发布合并分支，开发过程中代码统一合并到此分支，开发过程中代码统一提评审到此分支
- `<name>_dev`: 每位开发同学新建本地开发分支(如：`qisong_dev`)，此分支需每天推送当日新开发内容到远程端

3. CommitMessage 格式: `[<emoji>]<type>(scope): <subject>`, 必须符合规范才允许提交，不符合的不允许提交

- `<emoji>`: emoji 表情，可选
- `<type>`: 提交类型; 包括: feat(新功能), fix(bug 修复), refactor(重构), docs(文档), style(样式), perf(性能), test(测试), build(构建), ci(CI)相关, chore(其他修改), revert(参照前一个变更)
- `<scope>`: 变更范围，主要指某个模块、功能等
- `<subject>`: commit 目的描述，不超过 70 个词(尽量不带标点符号)

示例如下: git commit -m ":bug: fix(all): fixed some bug"

### 组件、页面

- 新建页面: `yarn umi g page [pageName] --pageName=[pageName] --cssExt=".scss" --dir`
- 新建组件: `yarn umi g component [compName] --dir`

> 注意：[pageName]、[compName] 续使用大驼峰式语法，类似: EditPage、CanvasBoard。新建组件后需在组件内添加 `README.md` 注明组件使用方式
