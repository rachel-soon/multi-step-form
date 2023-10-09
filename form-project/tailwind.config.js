/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#02295a',
        secondary: '#473dff',
        muted: '#9699ab'
      }
    }
  },
  plugins: []
}
