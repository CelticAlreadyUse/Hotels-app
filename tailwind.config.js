/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    colors:{
      'primary': '#163020',
      'secondary': '#304D30',
      'current':'#B6C4B6',
      'currentText':'#EEF0E5'
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

