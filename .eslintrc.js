module.exports = {
  extends: ['expo', 'prettier', 'plugin:@tanstack/eslint-plugin-query/recommended'],
  plugins: ['prettier', 'eslint-plugin-react-compiler', 'react-hooks', '@tanstack/query'],
  rules: {
    'prettier/prettier': 'error',
    'react-compiler/react-compiler': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
