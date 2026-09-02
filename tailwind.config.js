/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dwild: {
          dark: '#0B2118',       // Deep Forest
          jungle: '#102A20',     // Dark Jungle
          black: '#07100D',      // Almost Black
          earth: '#6B5842',      // Earth
          sand: '#D8C7A5',       // Warm Sand
          offwhite: '#F4F1E8',   // Off White
          green: '#3E5947',      // Secondary green
          muted: '#8A9E92',
          border: 'rgba(216, 199, 165, 0.15)',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      letterSpacing: {
        editorial: '0.2em',
        widest: '0.25em',
      },
      boxShadow: {
        glow: '0 0 40px rgba(216, 199, 165, 0.08)',
        subtle: '0 20px 40px rgba(7, 16, 13, 0.6)',
      }
    },
  },
  plugins: [],
}
