import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#FFF9F5',
          surface: '#FFFFFF',
          primary: '#E8B4B8',
          secondary: '#B8D4E8',
          accent: '#D4C4E8',
          text: '#4A4A4A',
          'text-secondary': '#7A7A7A',
          border: '#E8D4D4',
        },
        dark: {
          bg: '#1A1625',
          surface: '#251E35',
          primary: '#C78A8E',
          secondary: '#8AA4BA',
          accent: '#A48EBA',
          text: '#E8E8E8',
          'text-secondary': '#B8B8B8',
          border: '#3A2E4A',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
