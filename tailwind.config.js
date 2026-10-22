export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  darkMode: 'selector',
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
      screens: {
        '2xl': '1320px'
      }
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        popover: 'var(--popover)',
        'popover-foreground': 'var(--popover-foreground)',
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        secondary: 'var(--secondary)',
        'secondary-foreground': 'var(--secondary-foreground)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
        destructive: 'var(--destructive)',
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        'destructive-foreground': 'var(--destructive-foreground)',
        navy: {
          DEFAULT: '#13234A',
          950: '#0A1630',
          900: '#0E1B3A',
          800: '#13234A',
          700: '#1E3263',
          600: '#2B4178'
        },
        cream: {
          DEFAULT: '#F6EFE4',
          50: '#FCFAF6',
          100: '#F9F4EC',
          200: '#F3EADC',
          300: '#E8DAC3',
          400: '#D9C6A6'
        },
        gold: {
          DEFAULT: '#C08A3E',
          300: '#E2C08A',
          400: '#D2A25E',
          500: '#C08A3E',
          600: '#A0702A',
          700: '#86601F'
        },
        ink: {
          DEFAULT: '#252A36',
          muted: '#5B606D',
          soft: '#7A7F8B'
        }
      },
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"']
      },
      boxShadow: {
        soft: '0 1px 2px rgba(19,35,74,0.04), 0 8px 24px -12px rgba(19,35,74,0.12)',
        lift: '0 2px 4px rgba(19,35,74,0.05), 0 18px 40px -18px rgba(19,35,74,0.22)'
      },
      maxWidth: {
        site: '1400px'
      }
    }
  }
}
