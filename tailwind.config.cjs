/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxs: "380px",
			xs: "475px",
			...defaultTheme.screens,
    },
    extend: {
      colors: {
        ecell: {
          light: '#60A5FA',
          DEFAULT: '#3B82F6',
          deep: '#2563EB',
        },
      },
    },
    linearBorderGradients: {
      colors: {
        "primary": ["#3B82F6", "#2563EB"],
        "secondary": ["#2563EB", "#3B82F6"],
      },
      directions: {
        "t": "to top",
        "tr": "to top right",
        "r": "to right",
        "br": "to bottom right",
        "b": "to bottom",
        "bl": "to bottom left",
        "l": "to left",
        "tl": "to top left",
      },
    }
  },
  variants: {
    linearBorderGradients: ["responsive", "hover", "focus"],
  },
  plugins: [
    require('tailwindcss-border-gradients')(),
  ],
}
