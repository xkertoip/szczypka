/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '5px 7px 15px rgba(24, 24, 27, 0.5)',
        '4xl': '5px 7px 15px rgba(129, 140, 248, 0.4)'
      },
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
        },
        letterWiggle: {
          '0, 100%': {
            transform: 'scale(1)'
          },
          '25%': {
            transform: 'scaleY(0.8)'
          },
          '50%': {
            transform: 'scaleX(0.8) scaleY(1.1)'
          },
          '75%': {
            transform: 'scaleX(1.05)'
          }
        }
      },
      animation: {
        move: 'move 5s ease-in-out infinite',
        wiggle: 'wiggle 5s ease-in-out infinite',
        wiggleReverse: 'wiggleReverse 3s ease-in-out infinite',
        wiggleBg: 'wiggleBg 5s ease-in-out infinite',
        letterWiggle: 'letterWiggle 0.3s ease-in-out'
      }
    }
  },
  plugins: []
};
