import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      gray: {
        1: 'var(--gray-1)',
        2: 'var(--gray-2)',
        3: 'var(--gray-3)',
        4: 'var(--gray-4)',
        5: 'var(--gray-5)',
        6: 'var(--gray-6)',
        7: 'var(--gray-7)',
        8: 'var(--gray-8)',
        9: 'var(--gray-9)',
        10: 'var(--gray-10)',
        11: 'var(--gray-11)',
        12: 'var(--gray-12)',
      },
      blue: {
        1: 'var(--blue-1)',
        2: 'var(--blue-2)',
        3: 'var(--blue-3)',
        4: 'var(--blue-4)',
        5: 'var(--blue-5)',
        6: 'var(--blue-6)',
        7: 'var(--blue-7)',
        8: 'var(--blue-8)',
        9: 'var(--blue-9)',
        10: 'var(--blue-10)',
        11: 'var(--blue-11)',
        12: 'var(--blue-12)',
      },
      teal: {
        1: 'var(--teal-1)',
        2: 'var(--teal-2)',
        3: 'var(--teal-3)',
        4: 'var(--teal-4)',
        5: 'var(--teal-5)',
        6: 'var(--teal-6)',
        7: 'var(--teal-7)',
        8: 'var(--teal-8)',
        9: 'var(--teal-9)',
        10: 'var(--teal-10)',
        11: 'var(--teal-11)',
        12: 'var(--teal-12)',
      },
    },
    fontFamily: {
      sans: ['var(--font-inter-display)'],
    },
    fontSize: {
      '4xs': ['0.6875rem', '0.8125rem'],
      '3xs': ['0.75rem', '1rem'],
      '2xs': ['0.8125rem', '1.125rem'],
      xs: ['0.9375rem', '1.25rem'],
      sm: ['1rem', '1.3125rem'],
      base: ['1.0625rem', '1.375rem'],
      lg: ['1.25rem', { lineHeight: '1.5625rem', letterSpacing: '-0.01em' }],
      xl: ['1.375rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],
      '2xl': ['1.75rem', { lineHeight: '2.125rem', letterSpacing: '-0.01em' }],
      '3xl': ['2.125rem', { lineHeight: '2.5625rem', letterSpacing: '-0.01em' }],
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
  plugins: [typography, forms],
};

export default config;
