/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#020419",
        "secondary-color": "#E9F5F8",
        "tertiary-color": "#13244E",
        "neutral-color": "#4E6896",
        "font-color": "#000000",
      },
      fontFamily: {
        sans: [
          "Hiragino Sans",
          "ヒラギノ角ゴシック",
          "メイリオ",
          "Meiryo",
          "MS Ｐゴシック",
          "MS PGothic",
          "YuGothic",
          "Yu Gothic",
          "sans-serif",
        ],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
