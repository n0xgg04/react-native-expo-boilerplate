module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier', 'eslint-plugin-react-compiler', 'react-hooks'],
  rules: {
    'prettier/prettier': 'error',
    'react-compiler/react-compiler': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
