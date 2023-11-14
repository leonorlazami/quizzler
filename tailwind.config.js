/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'history-bg': "url('./img/history-1.png')",
        'mythology-bg': "url('./img/mythology-1.png')",
        'general-knowledge-bg': "url('./img/general-knowledge-1.png')",
        'film-bg': "url('./img/movies-1.png')",
        'music-bg': "url('./img/music-1.png')",
        'video-games-bg': "url('./img/video-games-1.png')",
      },
      backgroundColor: {
        'primary': '#252C4A',
        'secondary': 'rgb(42,17,77)',
        'tertiary': 'rgb(39,20,63)',
        'btn-bg': 'rgb(20,171,181)',
        'btn-bg-secondary': '#FECE2F'
      },
      fontFamily: {
        'primary': ["Montserrat", "sans-serif"],
        'secondary': ["Luckiest Guy", "cursive"]
      }
    },
  },
  plugins: [],
}

