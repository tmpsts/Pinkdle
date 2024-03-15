/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255, 255, 255, 0.5)",
          "0 0px 65px rgba(255, 255, 255, 0.35)"
        ],
        glow_pink: [
          "0 0px 20px rgba(244, 114, 182, 0.5)",
          "0 0px 65px rgba(244, 114, 182, 0.35)"
        ]
      }
    },
  },
  plugins: [],
};
