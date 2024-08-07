module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      'babel-plugin-react-compiler',
      [
        'react-native-platform-specific-extensions',
        {
          extensions: ['css', 'scss', 'sass'],
        },
      ],
    ],
  };
};
