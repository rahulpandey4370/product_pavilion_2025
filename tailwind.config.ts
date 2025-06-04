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
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
        // Custom colors for booth gradients
        'electric-blue': '#0066FF',
        'modern-indigo': '#6366F1',
        'vibrant-pink': '#EC4899',
        'deep-black': '#0A0A0A',
        'rich-dark-gray': '#1A1A1A',
        'pure-white': '#FFFFFF',
        'muted-gray': '#A1A1AA',
        'emerald': '#10B981',
        'amber': '#F59E0B',
        'booth-prism-ai-start': '#0066FF',
        'booth-prism-ai-end': '#3B82F6', // Lighter blue
        'booth-non-prism-ai-start': '#A855F7', // Purple
        'booth-non-prism-ai-end': '#EC4899', // Pink
        'booth-ai-dev-start': '#10B981', // Green
        'booth-ai-dev-end': '#06B6D4', // Cyan
        'booth-cross-platform-start': '#F97316', // Orange
        'booth-cross-platform-end': '#EF4444', // Red
        'booth-manufacturing-erp-start': '#374151', // Blue Gray
        'booth-manufacturing-erp-end': '#1F2937', // Darker Blue Gray
        'booth-integration-start': '#EF4444', // Red
        'booth-integration-via': '#FCD34D', // Yellow
        'booth-integration-end': '#10B981', // Green
        'booth-cloud-start': '#38BDF8', // Sky Blue
        'booth-cloud-end': '#0EA5E9', // Darker Sky Blue
        'booth-cloud-enablers-start': '#1D4ED8', // Dark Blue
        'booth-cloud-enablers-end': '#1E3A8A', // Even Darker Blue
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'gradient-bg': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'pulse-badge': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.1)' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'gradient-bg': 'gradient-bg 15s ease infinite',
        'pulse-badge': 'pulse-badge 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundSize: {
        '400%': '400% 400%',
      }
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
