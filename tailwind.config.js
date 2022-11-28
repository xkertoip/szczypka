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
      }
    }
  },
  plugins: [perspective, backfaceVisibility, transformStyle, rotateX]
};
