/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'neutralSilver': '#F5F7FA',
        'neutralDGrey': '#4D4D4D',
        'brandPrimary': '#DAA520',
        // 'brandPrimary': '#FFD700',
        'neutralGrey': '#717171',
        'gray900': '#18191F',
        'gold': '#ffd700',
    }
    },
  },
  plugins: [require('flowbite/plugin')],
}

