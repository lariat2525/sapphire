/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
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
        "manage-primary-color": "#111317",
        "manage-secondary-color": "#FCFEFF",
        "manage-tertiary-color": "#f8e58c",
        "manage-accent-color": "#e95295",
        "manage-neutral-color": "#f8e58c",
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
        overlock: ["overlock", "sans-serif"],
        zcoolKuaile: ["ZCOOL KuaiLe", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
