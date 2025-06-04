import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        headline: ['Inter', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background-hsl))', // Use HSL vars for base
        foreground: 'hsl(var(--foreground-hsl))',
        card: {
          DEFAULT: 'hsl(var(--card-hsl))',
          foreground: 'hsl(var(--card-foreground-hsl))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover-hsl))',
          foreground: 'hsl(var(--popover-foreground-hsl))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary-hsl))',
          foreground: 'hsl(var(--primary-foreground-hsl))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary-hsl))',
          foreground: 'hsl(var(--secondary-foreground-hsl))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted-hsl))',
          foreground: 'hsl(var(--muted-foreground-hsl))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent-hsl))',
          foreground: 'hsl(var(--accent-foreground-hsl))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive-hsl))',
          foreground: 'hsl(var(--destructive-foreground-hsl))',
        },
        border: 'hsl(var(--border-hsl))',
        input: 'hsl(var(--input-hsl))',
        ring: 'hsl(var(--ring-hsl))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background-hsl))',
          foreground: 'hsl(var(--sidebar-foreground-hsl))',
          primary: 'hsl(var(--sidebar-primary-hsl))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground-hsl))',
          accent: 'hsl(var(--sidebar-accent-hsl))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground-hsl))',
          border: 'hsl(var(--sidebar-border-hsl))',
          ring: 'hsl(var(--sidebar-ring-hsl))',
        },
        // Neon colors for direct use if needed, but prefer CSS vars
        'neon-blue': 'var(--neon-blue)',
        'neon-purple': 'var(--neon-purple)',
        'neon-pink': 'var(--neon-pink)',
        'neon-green': 'var(--neon-green)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        // Moved to globals.css for direct CSS var usage
        // 'gradient-bg': {
        //   '0%': { backgroundPosition: '0% 50%' },
        //   '50%': { backgroundPosition: '100% 50%' },
        //   '100%': { backgroundPosition: '0% 50%' },
        // },
        'pulse-badge': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.1)' },
        },
        // New keyframes from prompt
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)', opacity: '0.7' },
          '50%': { transform: 'translateY(-30px) rotate(180deg)', opacity: '0.4' },
        },
        particleFloat: { /* Defined in globals, but can be referenced if needed */
          '0%': { transform: 'translateY(0) translateX(0) scale(1)', opacity: 'var(--particle-opacity-start)' },
          '50%': { transform: 'translateY(-20px) translateX(10px) scale(1.2)', opacity: 'calc(var(--particle-opacity-start) * 0.5)'},
          '100%': { transform: 'translateY(0px) translateX(0px) scale(1)', opacity: 'var(--particle-opacity-start)' },
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: 'var(--neon-blue)' },
        },
        rotateBorder: { /* if using @property in CSS, this might not be needed here */
          to: { '--angle': '360deg' },
        },
        'ripple-effect': {
          to: { transform: 'scale(4)', opacity: '0' },
        },
        morph: {
          '0%, 100%': { borderRadius: '40% 60% 70% 30% / 40% 40% 60% 50%', transform: 'rotate(0deg) scale(1)' },
          '34%': { borderRadius: '70% 30% 50% 50% / 30% 30% 70% 70%', transform: 'rotate(120deg) scale(1.1)' },
          '67%': { borderRadius: '100% 60% 60% 100% / 100% 100% 60% 60%', transform: 'rotate(240deg) scale(0.9)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        spin: {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        // 'gradient-bg': 'gradient-bg 15s ease infinite', // now applied via direct CSS vars
        'pulse-badge': 'pulse-badge 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        // New animations
        float: 'float 6s ease-in-out infinite',
        typing: 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
        rotateBorder: 'rotateBorder 4s linear infinite',
        'ripple-effect': 'ripple-effect 0.6s linear',
        morph: 'morph 10s ease-in-out infinite alternate',
        gradientShift: 'gradientShift 5s ease-in-out infinite',
        spin: 'spin 1s linear infinite',
        'spin-reverse': 'spin 1.5s linear infinite reverse', // For spinner pseudo
        'spin-fast': 'spin 0.8s linear infinite', // For spinner pseudo
      },
      backgroundSize: {
        '300%': '300% 300%', // For gradient text
        '400%': '400% 400%',
      }
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
