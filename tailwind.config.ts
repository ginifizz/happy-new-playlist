import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data.ts',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: '2rem',
      center: true,
    },
    fontFamily: {
      sans: ['var(--font-montserrat)'],
      title: ['var(--font-spicy)'],
      hand: ['var(--font-marker)'],
    },
    extend: {
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        rotate: 'rotate 1s linear infinite',
      },
      colors: {
        beige: {
          DEFAULT: '#f0e7d2',
          dark: '#e2d2c2',
        },
        red: '#d05545',
        green: '#4e8765',
        yellow: '#e4cd56',
        brown: '#682c2e',
      },
      dropShadow: {
        floating: '0px 0px 20px rgb(0 0 0 / 0.5)',
      },
      height: {
        screen: "100dvh",
      },
      backgroundImage: {
        damier:
          'linear-gradient(45deg, #e2d2c2 25%, transparent 25%, transparent 75%, #e2d2c2 75%), linear-gradient(45deg, #e2d2c2 25%, transparent 25%, transparent 75%, #e2d2c2 75%)',
      },
    },
  },
  plugins: [],
};
export default config
