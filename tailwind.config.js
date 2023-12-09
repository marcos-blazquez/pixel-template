const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
 
module.exports = withMT({
  ...defaultTheme,
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      ...colors,
      gray: { ...colors.gray },
      prime: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#6366F1',
        600: '#0284c7',
        700: '#5A31B9',
        800: '#075985',
        900: '#0c4a6e'
      }
    }
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-(prime)/
    }
  ]
});