/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 3s linear infinite",
      },
      keyframes: {
        shimmer: {
          to: {
            "background-position": "200% center",
          },
        },
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "200%": "200%",
      },
    },
  },
  plugins: [],
};
