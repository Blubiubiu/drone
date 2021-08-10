// module.exports = {
//   root: true, // 保证其他文件夹的eslint设置不影响本项目
//   extends: [
//     'airbnb-base',
//     'plugin:vue/strongly-recommended',
//     'plugin:vue/recommended',
//     'prettier'
//   ],
//   parserOptions: {
//     parser: 'babel-eslint',
//     ecmaFeatures: {
//       experimentalObjectRestSpread: true,
//       jsx: true
//     },
//     sourceType: 'module'
//   },
//   env: {
//     browser: true,
//     node: true,
//     commonjs: true,
//     es6: true
//   },
//   globals: {
//     Promise: true,
//     qdp: true,
//     Vue: true,
//     qidianDA: true,
//     mqq: true,
//     emonitorIns: true
//   },
//   plugins: ['babel', 'vue', 'prettier'],
//   rules: {
//     'prettier/prettier': 'error',
//     indent: ['error', 4, { SwitchCase: 1 }],
//     semi: ['error', 'always'],
//     // vue
//     'vue/require-prop-types': 'off',
//     'vue/attributes-order': [
//       'warn',
//       {
//         order: [
//           'DEFINITION',
//           'LIST_RENDERING',
//           'CONDITIONALS',
//           'RENDER_MODIFIERS',
//           'GLOBAL',
//           'UNIQUE',
//           'OTHER_ATTR',
//           'BINDING',
//           'EVENTS',
//           'CONTENT'
//         ]
//       }
//     ]
//   }
// }
