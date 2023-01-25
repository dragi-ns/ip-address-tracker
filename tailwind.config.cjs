/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: {
        100: 'hsl(0, 0%, 59%)',
        200: 'hsl(0, 0%, 17%)',
      },
    },
  },
  plugins: [],
};
