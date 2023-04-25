/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blackBean: {
          100: '#2F0700',
          200: '#4A1A11'
        },
        almond: '#E7D5C4',
        sealBrown: {
          100: '#6a2917',
          200: '#3F0E06'
        }
      }
    },
  },
  plugins: [],
}

