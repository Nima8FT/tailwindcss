/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      'yekan': 'IRANSansX'
    },
    extend: {
      padding: {
        'md': '56%',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
    plugin(function({ addVariant }) {
      addVariant('radio-checked', '&:checked ~ label')
    }),
  ],
}