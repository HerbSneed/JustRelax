import flowbitePlugin from 'flowbite/plugin';
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
      primary: '#375657',
      button: '#D49E7F',
      gradient: '#7FB9D4',
      header: '#8DD5D6',
      click: '#1573E6'
      
    },
    extend: {
      textShadow: {
        'lg': '2px 2px 10px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    flowbitePlugin,
  ]
}

