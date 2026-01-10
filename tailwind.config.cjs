/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './privacy/**/*.html', './projects/**/*.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--c-bg) / <alpha-value>)',
        panel: 'rgb(var(--c-panel) / <alpha-value>)',
        text: 'rgb(var(--c-text) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)',
        neon: {
          1: 'rgb(var(--c-neon-1) / <alpha-value>)',
          2: 'rgb(var(--c-neon-2) / <alpha-value>)'
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgb(var(--c-neon-1) / 0.25), 0 0 32px rgb(var(--c-neon-1) / 0.12)'
      }
    }
  },
  darkMode: 'class',
  plugins: []
};
