module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      [
        'babel-plugin-react-compiler',
        {
          runtimeModule: 'react-compiler-runtime',
        },
      ],
    ],
  };
};
