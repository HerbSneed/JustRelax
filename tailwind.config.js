import 'flowbite-react';
import 'tailwindcss-gradients';


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      background: '#EEDFC8',
      primary: '#3A4B53',
      accent: '#EDCA95'


    },
    extend: {
      textShadow: {
        'lg': '2px 2px 10px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    'daisyui',
    'tailwindcss-gradients',
    'flowbite-react'
  ]
}

