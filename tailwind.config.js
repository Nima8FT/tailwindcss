/** @type {import('tailwindcss').Config} */
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
        'md' : '56%',
      }
    },
  },
  plugins: [],
}