/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "tropical-indigo-700": "#6E44FF",
        "tropical-indigo-500": "#AF99FF",
        "tropical-indigo-200": "#DFD6FF",
      },
      width: {
        "[90%]": "90%",
      },
      maxWidth: {
        "[450px]": "450px",
      },
      height: {
        "[5px]": "5px",
      },
    },
  },
  plugins: [],
};
