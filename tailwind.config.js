/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#383838',
        'font-gray': '#D9D9D9',
        'hr-gray': '#C9C9C9',
      },
    },
  },
  plugins: [],
}

