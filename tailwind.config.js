module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Primary - Damascus Sandstone
        primary: {
          DEFAULT: "#8B4513", // saddle-brown
          50: "#FDF8F3",
          100: "#F9E8D9", 
          200: "#F2D1B3",
          300: "#E8B088",
          400: "#DC8F5C",
          500: "#8B4513", // saddle-brown
          600: "#7A3D11",
          700: "#68350F",
          800: "#562D0D",
          900: "#45250B",
        },
        // Secondary - Courtyard Shadow
        secondary: {
          DEFAULT: "#4A5568", // gray-600
          50: "#F7FAFC",
          100: "#EDF2F7",
          200: "#E2E8F0",
          300: "#CBD5E0",
          400: "#A0AEC0",
          500: "#718096", // gray-500
          600: "#4A5568", // gray-600
          700: "#2D3748", // gray-800
          800: "#1A202C",
          900: "#171923",
        },
        // Accent - Traditional Gold
        accent: {
          DEFAULT: "#D4AF37", // gold
          50: "#FEFCF0",
          100: "#FDF6D3",
          200: "#FBEAA7",
          300: "#F7DD7A",
          400: "#F1D04E",
          500: "#D4AF37", // gold
          600: "#B8962F",
          700: "#9C7D27",
          800: "#80641F",
          900: "#644B17",
        },
        // Background Colors
        background: "#FAF7F2", // warm-white
        surface: "#F1EDE6", // warm-gray-50
        
        // Text Colors
        text: {
          primary: "#2D3748", // gray-800
          secondary: "#718096", // gray-500
        },
        
        // Status Colors
        success: "#38A169", // green-500
        warning: "#D69E2E", // yellow-600
        error: "#E53E3E", // red-500
      },
      fontFamily: {
        'crimson': ['Crimson Text', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'amiri': ['Amiri', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Crimson Text', 'serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'display': ['2.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'heading': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'subheading': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'soft': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'hover': '0 6px 16px rgba(0, 0, 0, 0.12)',
        'courtyard': '0 4px 12px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'contemplative': 'contemplative 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        contemplative: {
          '0%': { transform: 'scale(0.98)', opacity: '0.8' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}