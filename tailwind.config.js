/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
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
      },
      colors: {
        dark: {
          800 : '#232326',
          600 : '#3b3b41',
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes:{
        wiggle: {
          '0%, 100%': { transform: 'rotate(-8deg)' },
          '50%': { transform: 'rotate(8deg)' }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
    plugin(function ({ addVariant }) {
      addVariant('radio-checked', '&:checked ~ label')
    }),
  ],
}