/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "640px", // Small screens (e.g., phones)
      md: "768px", // Medium screens (e.g., tablets)
      lg: "1024px", // Large screens (e.g., laptops)
      xl: "1280px",
      "2xl": "1440px",
      1920: "1920px",
      2560: "2560px",
      3840: "3840px",
      5120: "5120px",
      7680: "7680px",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
