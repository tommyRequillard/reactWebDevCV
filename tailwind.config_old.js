/** @type {import('tailwindcss').Config} */
/** @type {import('@tailwindcss/forms').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    import('@tailwindcss/forms'), 
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#303030',
        'darker': '#333333', // Correction ici : retirez le point-virgule à la fin
        'gold': '#967C56',
        'cvblue': '#42f2f7',
        'cvblued': '#46acc2',
        'cvcyan': '#498c8a',
        'cvpurple': '#f3e0ec',
        'greylight': '#cccccc',
        'greylighter': '#f3f4f6',
        'cvbluetitle': '#6275f0'
      },
      animation: {
        'loader': 'loader .3s 3s both',
        'loading': 'inline-block relative w-[80px] h-[80px] box-border',
        'loading__circle': 'loading__circle 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
        'spin-custom': 'spin-custom 2s linear infinite',
      },
      keyframes: {
        'loader': {
          '0%, 100%': {opacity: '1'},
          '50%': {opacity: '0'},
        },
        'spin-custom': {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)'},
        },
      },
      animationDelay: {
        '1': '0.036s',
        '2': '0.072s',
        '3': '0.108s',
        '4': '0.144s',
        '5': '0.181s',
        '6': '0.216s',
        '7': '0.252s',
        '8': '0.288s',
      },
      backgroundImage: {},
    },
  }
}