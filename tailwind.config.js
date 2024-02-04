import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    fontSize: {
      'xs': '8px',
      'sm': '12px',
      'md': '16px',
      'lg': '20px',
      'xl': '24px',
      '2xl': '28px',
      '3xl': '32px',
    },
    fontWeight: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeight: {
      xs: '1.2',
      sm: '1.3',
      md: '1.4',
      lg: '1.5',
    },
    colors: {
      white: '#FFFFFF',
      gray: {
        'f4': '#F4F4F4',
        'd9': '#D9D9D9',
        'aa': '#AAAAAA',
        '99': '#999999',
        '3f': '#3F3F3F',
        '1a': '#1A1A1A',
      },
      black: '#000000',
      yellow: '#FFBF66',
      orange: '#FF4800',
      red: '#EA3800',
    },
    borderRadius: {
      sm: '4px',
      DEFAULT: '8px',
      full: defaultTheme.borderRadius.full,
    },
  },
  plugins: [],
};
