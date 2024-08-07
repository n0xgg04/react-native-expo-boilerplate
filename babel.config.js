module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'babel-plugin-react-compiler',
        {
          runtimeModule: 'react-compiler-runtime',
        },
      ],
      [
        'react-native-platform-specific-extensions',
        {
          extensions: ['css', 'scss', 'sass'],
        },
      ],
    ],
  };
};
