/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'deep-charcoal': '#1A1614',
        'wood-brown': '#2D2118',
        'ivory-cream': '#F4EBD9',
        cream: '#EBE2CD',
        'grill-orange': '#D9682B',
        'char-red': '#8B2C1A',
        'brass-gold': '#C9A24E',
        'mushroom-beige': '#A99980',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
        accent: ['Caveat', 'cursive'],
      },
      animation: {
        marquee: 'marquee 60s linear infinite',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'slide-up-settle': 'slideUpSettle 0.7s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUpSettle: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
