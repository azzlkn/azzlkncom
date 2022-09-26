/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      primary: '#5927E5',
      dark: '#1f1926',
      sub: '#362B48',
      light: '#B8A2D6',
      gray: '#939393',
      white: '#fff'
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
};
