/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      primary: '#030014',
      secondary: '#151312',
      accent: '#AB8BFF',
      ligth: {
        100: '#D6C6FF',
        200: '#A8B5DB',
        300: '#9CA4AB',
      },
      dark: {},
    },
  },
  plugins: [],
};
