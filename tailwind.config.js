/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}", // Added html just in case
    "./src/**/*" // Nuclear option: look at everything in src
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Clash Display"', 'sans-serif'],
      },
        animation: {
           marquee: 'marquee 50s linear infinite' 
          },

        keyframes: {
           marquee: { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-100%)' } } 
          },      
    },
  },
  plugins: [],
}