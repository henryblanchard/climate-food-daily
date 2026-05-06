/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Source Serif 4"', '"Source Serif Pro"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: '#1a1a1a',
        paper: '#fafaf7',
        accent: '#15803d',
        muted: '#737373',
        rule: '#e5e5e5',
      },
      maxWidth: {
        prose: '42rem',
      },
    },
  },
  plugins: [],
};
