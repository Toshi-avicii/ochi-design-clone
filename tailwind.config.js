/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      neueMontreal: ['nueu-montreal', 'Roboto', 'sans-serif'],
      neueMontrealLight: ['neue-montreal-light', 'Roboto', 'sans-serif'],
      founderGrotesk: ['founders-grotesk', 'Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

