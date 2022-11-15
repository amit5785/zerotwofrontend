/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      'roboto': ['Roboto', 'sans-serif'],
      keyframes: {
        wave: {
          '10%': { transform: 'translateY(-100%)' },
          '30%': { transform: 'translateY(-200%)' },
          '50%': { transform: 'translateY(-300%)' },
          '70%': { transform: 'translateY(-400%)' },
          '90%': { transform: 'translateY(-500%)' },
          '100%': { transform: 'translateY(-600%)' },
          // '85%': { transform: 'translateY(-700%)' },
          // '100%': { transform: 'translateY(-800%)' },
        },
      },
      animation: {
        wave: 'wave 4s linear normal forwards',
      }
    },
  },
  plugins: [],
}
