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
    './src/app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-lora)']
      },
      dropShadow: {
        '3xl': '5px 7px 14px rgba(24, 24, 27, 0.5)',
        '4xl': '5px 7px 14px rgba(129, 140, 248, 0.4)'
      },
      keyframes: {
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
        },
        slideAnimation: {
          from: {
            transform: 'translateX(0%)'
          },
          to: {
            transform: 'translateX(-100%)'
          }
        }
      },
      animation: {
        wiggleReverse: 'wiggleReverse 3s ease-in-out infinite',
        wiggleBg: 'wiggleBg 5s ease-in-out infinite',
        letterWiggle: 'letterWiggle 0.3s ease-in-out',
        slideAnimation: 'slideAnimation 5s linear infinite'
      }
    }
  },
  plugins: [perspective, backfaceVisibility, transformStyle, rotateX]
};
