import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      letterSpacing: {
        tightest: '-0.03em',
      },
      boxShadow: {
        soft: '0 24px 70px -28px rgba(15, 23, 42, 0.20)',
        card: '0 1px 2px rgba(15, 23, 42, 0.04), 0 14px 34px -18px rgba(15, 23, 42, 0.16)',
        'card-hover': '0 1px 2px rgba(15, 23, 42, 0.05), 0 26px 50px -22px rgba(29, 57, 175, 0.30)',
        'brand-glow': '0 10px 28px -10px rgba(37, 99, 235, 0.55)',
        'brand-glow-lg': '0 16px 38px -12px rgba(37, 99, 235, 0.62)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(52% 55% at 82% 8%, rgba(37,99,235,0.13), transparent 70%)',
      },
      keyframes: {
        'reveal-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'reveal-up': 'reveal-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
};

export default config;
