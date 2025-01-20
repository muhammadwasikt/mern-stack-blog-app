/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
import scrollbarHide from 'tailwind-scrollbar-hide'


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secandory: '#ffff',
      }
    },
  },
  plugins: [
    daisyui,
    scrollbarHide,
  ],
}