module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(0, 0%, 88%)",
        input: "hsl(0, 0%, 88%)",
        ring: "hsl(212, 90%, 48%)",
        background: "hsl(0, 0%, 100%)",
        foreground: "hsl(216, 15%, 20%)",
        primary: {
          DEFAULT: "hsl(212, 90%, 48%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        secondary: {
          DEFAULT: "hsl(212, 90%, 35%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        tertiary: {
          DEFAULT: "hsl(158, 70%, 45%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        neutral: {
          DEFAULT: "hsl(0, 0%, 98%)",
          foreground: "hsl(216, 15%, 20%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 84%, 60%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        muted: {
          DEFAULT: "hsl(0, 0%, 94%)",
          foreground: "hsl(0, 0%, 40%)",
        },
        accent: {
          DEFAULT: "hsl(0, 0%, 94%)",
          foreground: "hsl(216, 15%, 20%)",
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(216, 15%, 20%)",
        },
        card: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(216, 15%, 20%)",
        },
        success: "hsl(145, 66%, 40%)",
        warning: "hsl(35, 90%, 50%)",
        gray: {
          50: "hsl(0, 0%, 98%)",
          100: "hsl(0, 0%, 94%)",
          200: "hsl(0, 0%, 88%)",
          300: "hsl(0, 0%, 80%)",
          400: "hsl(0, 0%, 65%)",
          500: "hsl(0, 0%, 50%)",
          600: "hsl(0, 0%, 40%)",
          700: "hsl(0, 0%, 30%)",
          800: "hsl(0, 0%, 20%)",
          900: "hsl(0, 0%, 10%)",
        },
      },
      borderRadius: {
        lg: "0.8rem",
        md: "calc(0.8rem - 2px)",
        sm: "calc(0.8rem - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem',
        '64': '16rem',
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(135deg, hsl(212, 90%, 48%) 0%, hsl(158, 70%, 45%) 100%)',
        'gradient-2': 'linear-gradient(135deg, hsl(212, 90%, 35%) 0%, hsl(216, 15%, 20%) 100%)',
        'button-border-gradient': 'linear-gradient(90deg, hsl(212, 90%, 48%) 0%, hsl(158, 70%, 45%) 100%)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
