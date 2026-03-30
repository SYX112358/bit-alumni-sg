import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bit-navy': '#003366',
        'bit-dark': '#002244',
        'bit-red': '#8B0000',
        'bit-gold': '#C4A35A',
      },
    },
  },
  plugins: [],
};

export default config;
