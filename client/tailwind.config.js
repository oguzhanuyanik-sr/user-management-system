/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
    },
    colors: {
      'white-100': '#ffffff',
      'white-200': '#eceded',
      'white-300': '#f1f2f6',
      'green-100': '#DBE9EE',
      'green-150': '#77A0AF',
      'green-200': '#476E7C',
      'green-300': '#2c5364',
      'green-400': '#203a43',
      'black-300': '#25282c',
      'black-400': '#151719',
      btnRed: '#b33939',
      btnGreen: '#218c74',
      btnBlue: '#227093',
    },
    fontFamily: {
      source: ['Source Code Pro', 'monospace'],
      nunito: ['Nunito Sans', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        standard: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',
      },
    },
  },
  plugins: [],
};
