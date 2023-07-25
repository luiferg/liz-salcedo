/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          400: '#35bcaf',
          500: '#2EA397',
          600: '#21756D',
        },
        black: '#414141',
        yellow: '#f4b645',
        orange: '#ef7742',
        pink: '#ed9e99',
        light: '#f4d0c2',
        white: '#ffffff',
      },
      fontFamily: {
        primary: ['Raleway', 'sans-serif'],
        secondary: ['OhnoBlazeface', 'serif'],
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1600px',
    },
  },
  plugins: [],
}
