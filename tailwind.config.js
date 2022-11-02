/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        move: {
          '0%, 100%': {
            transform: 'translateX(-10px)'
          },
          '50%': {
            transform: 'translateX(0)'
          }
        },
        wiggle: {
          '0, 100%': {
            transform: 'rotate(-10deg)'
          },
          '50%': {
            transform: 'rotate(-15deg)'
          }
        },
        wiggleReverse: {
          '0, 100%': {
            transform: 'rotate(-15deg)'
          },
          '50%': {
            transform: 'rotate(10deg)'
          }
        },
        wiggleBg: {
          '0, 100%': {
            transform: 'rotate(-45deg)'
          },
          '50%': {
            transform: 'rotate(-30deg)'
          }
        }
      },
      animation: {
        move: 'move 5s ease-in-out infinite',
        wiggle: 'wiggle 5s ease-in-out infinite',
        wiggleReverse: 'wiggleReverse 3s ease-in-out infinite',
        wiggleBg: 'wiggleBg 5s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
