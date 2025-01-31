/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#10002b',    // russian-violet
        secondary: '#7b2cbf',  // french-violet
        tertiary: '#240046',   // russian-violet-2
        accent: '#c77dff',     // heliotrope
        highlight: '#e0aaff',  // mauve
        textPrimary: '#e0aaff', // mauve
        textSecondary: '#9d4edd', // amethyst
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
