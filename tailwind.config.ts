import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        labelSm: '14px',
        labelMd: '16px',
        bodyMd: '16px',
      },
      fontWeight: {
        labelSm: '550',
        labelMd: '500',
        bodyMd: '400',
      },
      letterSpacing: {
        labelSm: '0.16px',
        labelMd: '0.16px',
        bodyMd: '6px',
      },
      lineHeight: {
        labelSm: '17px',
        labelMd: '22px',
        bodyMd: '22px',
      },
      colors: {
        surface: {
          xHigh: '#8C8C9A',
          xLow: '#FFFFFF',
          brand: '#0050FF',
          danger: '#DC2828',
          dangerVariant: '#FFDCDC',
          warning: '#A56315',
          warningVariant: '#FAF1B6',
        },
        content: {
          onNeutral: {
            xxHigh: '#2C2C31',
            medium: '#8C8C9A',
            low: '#C9C9CE',
            danger: '#DC2828',
            warning: '#A56315',
          },
        },
        state: {
          default: {
            hover: 'rgba(26, 26, 26, 0.06)',
            focus: 'rgba(26, 26, 26, 0.8)',
          },
        },
      },
      spacing: {},
      borderRadius: {
        DEFAULT: '12px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config
