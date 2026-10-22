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
          DEFAULT: '#075331',
          950: '#033320',
          900: '#06452A',
          800: '#075331',
          700: '#176642',
          600: '#2B7A55'
        },
        cream: {
          DEFAULT: '#F7F1DC',
          50: '#FBFAF4',
          100: '#FAF6E9',
          200: '#F1E5BD',
          300: '#E6D8AD',
          400: '#D9C98F'
        },
        gold: {
          DEFAULT: '#C79A28',
          300: '#E4C866',
          400: '#D9B449',
          500: '#C79A28',
          600: '#A77B18',
          700: '#86600F'
        },
        ink: {
          DEFAULT: '#173D2B',
          muted: '#5F665E',
          soft: '#7A8179'
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
