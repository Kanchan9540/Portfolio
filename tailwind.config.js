/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // boxShadow: {
      //   'custom-shadow': '0 4px 6px rgba(239, 244,20, 0.9), 0 -4px 6px rgba(20, 22, 40, 0.9)',
      // },

      keyframes: {
        superman: {
          '0%': { borderColor: 'blue', transform: 'translate(0, 0px)', boxShadow: '10px 10px 100px 50px blue' },
          '25%': { borderColor: 'rgb(239, 244, 11)', boxShadow: '10px 10px 100px 50px rgb(239, 244, 11)' },
          '50%': { borderColor: 'rgb(12, 12, 199)', transform: 'translate(0, 10px)', boxShadow: '10px 10px 100px 50px rgb(12, 12, 199)' },
          '75%': { borderColor: 'rgb(130, 217, 160)', boxShadow: '10px 10px 100px 50px rgb(130, 217, 160)' },
          '100%': { borderColor: 'rgb(50, 55, 205)', transform: 'translate(0, 0px)', boxShadow: '10px 10px 100px 50px rgb(50, 55, 205)' },
        },
      },
      animation: {
        superman: 'superman 2s infinite',
      },
    },
  },
  plugins: [],
}

