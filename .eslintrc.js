module.exports = {
  // Umi 项目
  root: true,
  extends: [require.resolve('umi/eslint')],
  // 全局参数
  globals: {
    BUILD_ENV: 'readonly',
    BUILD_APP: 'readonly',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/prop-types': 'off', // ts 关闭 prop-types 校验
        // ts 命名规则
        '@typescript-eslint/naming-convention': [
          1,
          {
            selector: 'default',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'forbid',
          },
          {
            selector: 'enumMember',
            format: ['UPPER_CASE'],
          },
        ],
      },
    },
    {
      // 声明文件关闭命名校验
      files: ['*.d.ts'],
      rules: {
        '@typescript-eslint/naming-convention': 'off',
      },
    },
  ],
  rules: {
    'global-require': 'off', // 允许 require
    'object-curly-newline': 'off', // 关闭对象属性必须换行
    'no-shadow': ['error', { hoist: 'all' }], // 同名变量覆盖规则
    'no-console': ['error', { allow: ['warn', 'error'] }], // console 允许 warn, error
    'import/prefer-default-export': 'off', // 禁用单 export 必须 default
    'jsx-a11y/click-events-have-key-events': 'off', // 点击事件必须绑定键盘
    'jsx-a11y/no-static-element-interactions': 'off', // 点击事件必须绑定 role 角色
    'react/require-default-props': 'off', // tsx 文件关闭必须 isRequired 校验
    '@typescript-eslint/lines-between-class-members': 'off', // 关闭ts 类成员必须隔行
    'max-len': ['error', { code: 110, tabWidth: 2, ignoreComments: true, ignoreTrailingComments: true }], // 长度限制
    // 命名组件需要使用箭头函数
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['function-declaration', 'arrow-function'],
        unnamedComponents: 'arrow-function',
      },
    ],
  },
};
