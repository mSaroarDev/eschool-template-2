/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandColor: "#004D40",
        body: "#F0F0F1",
        borderColor: "#ddd",
        lightBg: "#F6F7F7",
      },
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
