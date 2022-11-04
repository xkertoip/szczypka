/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-180': {
      transform: 'rotateY(180deg)'
    },
    '.rotate-x-180': {
      transform: 'rotateX(180deg)'
    }
  });
});

const backfaceVisibility = plugin(function ({ addUtilities }) {
  addUtilities({
    '.backface-visible': {
      'backface-visibility': 'visible'
    },
    '.backface-hidden': {
      'backface-visibility': 'hidden'
    }
  });
});
const perspective = plugin(function ({ addUtilities }) {
  addUtilities({
    '.perspective-3d': {
      perspective: '600px'
    }
  });
});
const transformStyle = plugin(function ({ addUtilities }) {
  addUtilities({
    '.transform-preserve': {
      'transform-style': 'preserve-3d'
    }
  });
});

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '5px 7px 7px rgba(24, 24, 27, 0.5)',
        '4xl': '5px 7px 7px rgba(129, 140, 248, 0.4)'
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
  plugins: [perspective, backfaceVisibility, transformStyle, rotateX]
};
