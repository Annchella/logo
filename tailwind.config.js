/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#EB5A28', // Updated to match Figma orange
      },
      fontFamily: {
        'syne': ['Syne', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'proxemic': ["'Proxemic DEMO'", 'sans-serif'],
        'ubuntu-sans': ['Ubuntu Sans', 'sans-serif'],
      },
      keyframes: {
        'slide-up-white': {
          '0%, 45%': { transform: 'translateY(0)', opacity: '1' },
          '50%, 95%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-up-orange': {
          '0%, 45%': { transform: 'translateY(100%)', opacity: '0' },
          '50%, 95%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
        'text-color-cycle': {
          '0%, 45%': { color: '#ffffff' },
          '50%, 95%': { color: '#F15E22' },
          '100%': { color: '#ffffff' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        'slide-up-white': 'slide-up-white 4s ease-in-out infinite',
        'slide-up-orange': 'slide-up-orange 4s ease-in-out infinite',
        'text-color-cycle': 'text-color-cycle 4s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [],
}
