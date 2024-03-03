/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#526965',
      dark: '#333333',
      sub: '#2245C0',
      light: '#E7E7E7',
      gray: '#808080',
      white: '#fff'
    }
  },
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/typography')]
};
