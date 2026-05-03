/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": "#FCBA04",        // Amber Flame - Vibrant yellow
        "secondary": "#A50104",       // Inferno - Deep red
        "accent": "#590004",          // Black Cherry - Dark red
        "mahogany": "#250001",        // Rich Mahogany - Very dark red/brown
        "background-light": "#F3F3F3",// White Smoke - Off white
        "background-dark": "#250001", // Rich Mahogany - Dark variant
        "surface-light": "#FFFFFF",
        "surface-dark": "#3A0002",
        "card-light": "#FFFFFF",
        "card-dark": "#3A0002",
        "border-light": "#E5E5E5",
        "border-dark": "#590004",     // Black Cherry for borders
        "text-light": "#250001",      // Rich Mahogany for text
        "text-dark": "#F3F3F3",       // White Smoke for dark mode text
        "text-muted-light": "#6B6B6B",
        "text-muted-dark": "#B8B8B8"
      },
      fontFamily: {
        "display": ["Plus Jakarta Sans", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
