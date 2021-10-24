module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'yb-white': '#CDD1C4',
        'yb-blue': '#5C80BC',
        'yb-gray': '#4D5061',
        'yb-black': '#30323D',
        'yb-yellow': '#E8C547',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
