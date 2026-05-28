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
          bg: '#F1F4FA',
          surface: '#FAFBFE',
          primary: '#1568C4',
          secondary: '#5C6B82',
          accent: '#0D7A6C',
          text: '#1B1F2E',
          'text-secondary': '#52607A',
          border: '#D5DAE8',
        },
        dark: {
          bg: '#161A24',
          surface: '#1D2233',
          primary: '#4E96E0',
          secondary: '#7D8FA8',
          accent: '#3EC4B2',
          text: '#E4E9F4',
          'text-secondary': '#8593AA',
          border: '#2A3347',
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
