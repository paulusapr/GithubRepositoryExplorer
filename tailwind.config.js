/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '0': '0px 4px 8px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        black: {
          0: '#000000',
        },
        white: {
          0: '#ffffff',
        },
        yellow: {
          0: '#fff200',
        },
        blue: {
          0: '#c5ecff',
          1: '#3fa9f5',
          2: '#0d69a9',
          3: '#0d4f7f',
        },
        grey: {
          0: '#d0d0d0',
          1: '#d4d4d4',
          2: '#dfdfdf',
        },
      },
      screens: {
        mobile: {
          max: '767px',
        },
        tablet: {
          max: '1023px',
          min: '768px',
        },
        laptop: '1024px',
      },
    },
  },
};
