/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{html,js, jsx, tsx}'],
  theme: {
    extend: {
      colors: {
        monza: {
          DEFAULT: '#CF0540',
          50: '#FC8FAF',
          100: '#FC7BA1',
          200: '#FB5484',
          300: '#FA2C68',
          400: '#F7064C',
          500: '#CF0540',
          600: '#98042F',
          700: '#61021E',
          800: '#2B010D',
          900: '#000000',
          950: '#000000',
        },
      },
    },
  },
  plugins: [],

  safelist: [
    {
      pattern:
        /(bg|text|border)-(monza|secondary|accent|success|danger|warning|info)-(50|100|200|300|400|500|600|700|800|900|950)/,
      variants: ['hover', 'focus', 'active', 'disabled'],
    },
    {
      pattern: /(mt|mb|mr|ml|my|mx|px|py|pt|pb|pl|pr|m|p)-[0-9]+/,
    },
    {
      pattern: /flex.*/,
    },
    {
      patterb: /hidden/,
    },
    {
      pattern: /grid.*/,
    },
    {
      pattern: /place-.*/,
    },
    {
      pattern: /(justify|items|text|animate|space|rounded|border|font|block|inline|bg|container|md:|lg:|from|to|via).*/,
    },
    {
      pattern: /(bottom|right|top|left)-[0-9]+/,
    },
    {
      pattern: /(w|h)-[0-9|full|screen]+/,
    },
  ],
};
