/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        tilt: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-10deg)' },
          '75%': { transform: 'rotate(10deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        rotate: 'rotate 15s linear infinite',
        tilt: 'tilt 5s linear infinite',
      },
      borderWidth: {
        '3': '3px',
      },
      colors: {
        red: {
          600: '#FF0000',
        },
        blue: {
          300: '#73C0FC',
          900: '#183153',
        },
        yellow: '#ffd43b',
      },
    },
  },
  plugins: [],
}