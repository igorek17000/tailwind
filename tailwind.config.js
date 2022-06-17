
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/*.html"],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9',
        'login': '#9e9e9e17'
        },
        fontFamily:{
          'Montserrat':['Montserrat', 'san-serif']
        },
        textColor:{
          'primary': '#CC2D4A',
          'secondary': '#8FA206',
          'terciary': '#61AEC9',
        },
      backgroundImage: {
        'travel1': "url('./image/travel1.jpg')",
        'travel2': "url('./image/travel2.jpg')",
        'travel3': "url('./image/travel3.jpg')",
        'travel4': "url('./image/travel4.jpg')",
        'travel5': "url('./image/travel5.jpg')",
        'travel6': "url('./image/travel6.jpg')",
        'travel7': "url('./image/travel7.jpg')",
        'travel8': "url('./image/travel8.jpg')",
        'travel9': "url('./image/travel9.jpg')",
        'travel10': "url('./image/travel10.jpg')",
        'travel11': "url('./image/travel11.jpg')",
        'travel12': "url('./image/travel12.jpg')",
        'travel13': "url('./image/travel13.jpg')",
      },
    },
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    {
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
    }
  ],
}
