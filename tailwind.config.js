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
        // Palette sampled from the AL-IRSHAAD logo (deep green + gold).
        navy: {
          DEFAULT: '#06561F',
          950: '#022F10',
          900: '#044017',
          800: '#06561F',
          700: '#0C6E2B',
          600: '#168A38'
        },
        cream: {
          DEFAULT: '#F8F3DF',
          50: '#FEFCF5',
          100: '#FBF7E8',
          200: '#F4EBC9',
          300: '#EADDAE',
          400: '#DCC989'
        },
        gold: {
          DEFAULT: '#D6A21E',
          300: '#F3D77A',
          400: '#E8BC38',
          500: '#D6A21E',
          600: '#A87608',
          700: '#855A05'
        },
        ink: {
          DEFAULT: '#12301D',
          muted: '#55645A',
          soft: '#7A887E'
        }
      },
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"']
      },
      boxShadow: {
        soft: '0 1px 2px rgba(2,47,16,0.04), 0 8px 24px -12px rgba(2,47,16,0.14)',
        lift: '0 2px 4px rgba(2,47,16,0.05), 0 18px 40px -18px rgba(2,47,16,0.26)'
      },
      maxWidth: {
        site: '1400px'
      }
    }
  }
}
