const { withTV } = require('tailwind-variants/transformer');

module.exports = withTV({
  content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
});
