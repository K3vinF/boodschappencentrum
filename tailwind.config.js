module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx,css}', './_posts/**/*.md'],
  darkMode: true,
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    fontFamily: {
      display: "'Pacifico', cursive",
    },
    extend: {
      colors: {
        gray: {
          100: '#333333',
          200: '#4C4C4C',
        },
        yellow: '#FBDF0A',
      },
    },
  },
  variants: {},
  plugins: [],
};
