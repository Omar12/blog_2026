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
          bg: '#FAF7F2',
          surface: '#FFFFFF',
          primary: '#C05D3B',
          secondary: '#7A8B6E',
          accent: '#B08D57',
          text: '#2D2A26',
          'text-secondary': '#6B6560',
          border: '#E5DED4',
        },
        dark: {
          bg: '#1C1B18',
          surface: '#272521',
          primary: '#D4845F',
          secondary: '#9AAE8A',
          accent: '#C9A96E',
          text: '#E8E4DC',
          'text-secondary': '#A8A29A',
          border: '#3D3A34',
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
