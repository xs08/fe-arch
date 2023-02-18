# Stylelint 样式 lint 校验

> 由于 stylelintrc 文件不支持注释，特拆分出此部分基于 "stylelint-config-standard", "stylelint-config-sass-guidelines", "stylelint-config-recess-order" 进行拓展

## 自定义规则如下

```json
{
  "import-notation": "string" /* @import 语句识别为字符串 */,
  "declaration-empty-line-before": null /* 不启用声明前空行校验 */,
  "selector-class-pattern": null /* 禁用类名格式校验 */,
  "max-nesting-depth": null /* 禁用最大深度校验 */,
  "selector-max-compound-selectors": null /* 不限制选择器中复合选择器的数量 */,
  "no-descending-specificity": true /* 不允许较低优先级选择器出现在较高优先级选择器之后 */,
  "function-name-case": "lower" /* 功能函数名只能使用小写字符 */,
  "value-keyword-case": "lower" /* 样式值只能用小写字符，如 PX 等大写字符不支持 */,
  "alpha-value-notation": "number" /* 指定透明度值必须使用数字 */,
  "color-function-notation": "legacy" /* 颜色函数只能使用逗号间隔 */,
  "selector-no-qualifying-type": [
    true,
    { "ignore": ["attribute", "class", "id"] }
  ] /* 只允许通过属性、类名、ID进行类型限定 */,
  "order/properties-alphabetical-order": null /* 不启用样式名称按照字符顺序排列 */,
  "order/properties-order": null /* 不启用样式类名指定规则排序 */,
  "scss/dollar-variable-pattern": ["[a-z][a-zA-Z]+"] /* $符号命名参数需使用大小写名称组合 */,
  "scss/selector-no-redundant-nesting-selector": [
    true,
    { "ignoreKeywords": ["when", "media", "and"] }
  ] /* 禁止冗余嵌套选择器 */,
  "scss/at-import-no-partial-leading-underscore": true /* 不允许在 @import 中的部分名称中使用前导下划线 */
}
```
