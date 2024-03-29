/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "className",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          // Define your light mode colors here
          primary: "#ffffff",
          secondary: "#f3f4f6",
          text: "#1f2937",
        },
        dark: {
          // Define your dark mode colors here
          primary: "#1f2937",
          secondary: "#111827",
          text: "#f9fafb",
        },
      },
      fontFamily: {
        dance: ["Dance\\Script"],
      },
    },
  },
  plugins: [],
};
