/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    colors:{
        'cream': '#F2F6D0',
        'dark-lavander': '#7F557D',
        'lavander': '#C6CAED',
        'dark-green': '#011718',
        'black': '#000809',
        'white': '#fff'
    },
    fontFamily:{
        sans: ['Poppins', 'sans-serif'],
        serif: ['Editorial old', 'serif'],

        'serif-italic': ['Editorial old italic', 'serif'],
        'power-regular': ['Power Grotesk', 'sans']
    }
  },
  plugins: [],
}

