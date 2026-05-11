/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Elite Security Color Palette
        eliteNavy: 'rgb(var(--elite-navy) / <alpha-value>)',
        charcoalElite: 'rgb(var(--charcoal-elite) / <alpha-value>)',
        gunmetal: 'rgb(var(--gunmetal) / <alpha-value>)',
        titanium: 'rgb(var(--titanium) / <alpha-value>)',
        carbon: 'rgb(var(--carbon) / <alpha-value>)',

        // Enhanced Security Accents
        securityRed: 'rgb(var(--security-red) / <alpha-value>)',
        platinumSilver: 'rgb(var(--platinum-silver) / <alpha-value>)',
        cyberBlue: 'rgb(var(--cyber-blue) / <alpha-value>)',
        successGreen: 'rgb(var(--success-green) / <alpha-value>)',
        warningAmber: 'rgb(var(--warning-amber) / <alpha-value>)',
        infoCyan: 'rgb(var(--info-cyan) / <alpha-value>)',

        // Legacy colors for compatibility
        deepNavy: 'rgb(var(--color-deepNavy) / <alpha-value>)',
        navyLight: 'rgb(var(--color-navyLight) / <alpha-value>)',
        charcoal: 'rgb(var(--color-charcoal) / <alpha-value>)',
        safetyOrange: 'rgb(var(--color-safetyOrange) / <alpha-value>)',
        gold: 'rgb(var(--color-gold) / <alpha-value>)',
        textPrimary: 'rgb(var(--color-textPrimary) / <alpha-value>)',
        textSecondary: 'rgb(var(--color-textSecondary) / <alpha-value>)',
        
        // Stitch MD3 Tokens
        surface: '#0c1322',
        surfaceDim: '#0c1322',
        surfaceBright: '#32394a',
        surfaceContainerLowest: '#070e1d',
        surfaceContainerLow: '#151b2b',
        surfaceContainer: '#191f2f',
        surfaceContainerHigh: '#232a3a',
        surfaceContainerHighest: '#2e3545',
        surfaceVariant: 'rgb(var(--color-surfaceVariant) / <alpha-value>)', // Use with opacity + blur for Tactical Glass
        surfaceTint: '#c0c6db',
        
        primary: '#c0c6db',
        primaryContainer: '#0b1221',
        primaryFixed: '#dce2f8',
        onPrimary: '#293041',
        onPrimaryContainer: '#777d90',
        onPrimaryFixed: '#151b2b',
        
        secondary: '#c1c7cf',
        secondaryContainer: '#41474e',
        onSecondary: '#2b3137',
        
        tertiary: '#7bd0ff',
        tertiaryContainer: '#00141f',
        onTertiary: '#00354a',
        
        error: '#ffb4ab',
        errorContainer: '#93000a',
        onError: '#690005',
        
        outline: '#909097',
        outlineVariant: '#45464c', // Ghost borders
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'], // Added from Stitch specs
      },
      spacing: {
        'sm-gap': '10px',
        'md-gap': '15px',
        'lg-gap': '30px',
        'xl-gap': '40px',
        'pad-sm': '5px',
        'pad-md': '12px',
        'pad-lg': '20px',
        'pad-xl': '30px',
      },
      borderRadius: {
        'xs': '4px',
        'sm': '6px',
        'md': '8px',
        'lg': '12px',
        'pill': '20px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'scan': 'scan 4s linear infinite',
        'sweep': 'sweep 6s infinite',
        'pulse-anim': 'pulse 2s infinite',
        'splash-zoom': 'splashZoom 2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'splash-fade-out': 'splashFadeOut 0.5s ease-out 2s forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scan: {
          '0%': { top: '-10%' },
          '100%': { top: '110%' },
        },
        sweep: {
          '0%': { left: '-100%' },
          '20%': { left: '200%' },
          '100%': { left: '200%' },
        },
        pulse: {
          '0%': { boxShadow: '0 0 0 0 rgba(255, 69, 0, 0.7)' },
          '70%': { boxShadow: '0 0 0 10px rgba(255, 69, 0, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(255, 69, 0, 0)' },
        },
        splashZoom: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '40%': { transform: 'scale(1.05)', opacity: '1', filter: 'drop-shadow(0 0 20px rgba(255,170,0,0.5))' },
          '100%': { transform: 'scale(1)', opacity: '1', filter: 'drop-shadow(0 0 5px rgba(255,170,0,0.2))' },
        },
        splashFadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0', visibility: 'hidden' },
        }
      }
    },
  },
  plugins: [],
}
