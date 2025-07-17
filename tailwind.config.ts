// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,ts,css,scss}',
  ],
  theme: {
    extend: {
      fontFamily: {
        winky: ['"Winky Rough"', 'cursive'],
      },
      colors: {
        primary: '#1d4ed8',  // sidebar, card
        secondary: '#1d4ed8',// bg containers
        info: '#3b82f6',     // text
        success: '#10b981',  // verde
        warning: '#f59e0b',  // giallo/arancio
        danger: '#ef4444',   // rosso
      },
    },
  },
  plugins: [],
}
