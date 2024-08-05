/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-red": "#f51720",
        "custom-soil": "#90865D",
        "custom-darkNaviBlue": "#495157",
        "custom-gray": "#D2D2D2",
      },
    },
  },
  plugins: [],
};
