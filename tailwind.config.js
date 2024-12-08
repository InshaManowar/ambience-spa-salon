/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F4D03F',
          dark: '#B4941F',
        },
        custom: {
          black: '#1A1A1A',
          gray: '#333333',
        },
        beige: {
          light: '#F5F0EB',
          DEFAULT: '#C4A484',
          dark: '#8B7355',
        },
        navy: {
          DEFAULT: '#0A192F',
          light: '#172A45',
          dark: '#020C1B',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}