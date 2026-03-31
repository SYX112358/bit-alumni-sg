import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bit-green': '#1B5E20',
        'bit-green-light': '#2E7D32',
        'bit-red': '#C62828',
        'bit-brown': '#8B4513',
        'bit-dark': '#14472A',
      },
    },
  },
  plugins: [],
};

export default config;
