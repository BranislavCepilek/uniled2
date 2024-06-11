/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'system-ui', 'sans-serif'],
        merriweather: ['Merriweather', 'system-ui', 'serif']
      },
      fontWeight: {
        'montserrat-regular': 400,
        'montserrat-semibold': 600,
        'montserrat-extrabold': 800
      }
    },
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      primary: '#000820',
      secondary: '#BE8C33',
      paragraphs: '#E8D7A0',
      switcher: '#001720'
    },
  },
  plugins: []
}