/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#303030',
        'darker': '#333333;',
        'gold': '#967C56',
        'cvblue': '#42f2f7',
        'cvblued': '#46acc2',
        'cvcyan': '#498c8a',
        'cvpurple': '#f3e0ec',
        'greylight': '#cccccc',
        'greylighter': '#f3f4f6'
      },
      backgroundImage: {},
    },
  },
  plugins: [],
}

