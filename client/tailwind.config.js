/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react'
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'max': "780px"}
      }
    },
  },
  plugins: [nextui()],
}