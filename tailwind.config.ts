import type { Config } from "tailwindcss";

export default {
  content: ["./app/views/*/*.{ejs,js}", "./app/public/templates/*.{ejs,js}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Ubuntu", "sans-serif"],
        header: ["Rajdhani", "sans-serif"],
        body: ["Assistant", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        darkblue: "#0339A6",
        mediumblue: "#1755A6",
        lightblue: "#6A9AD9",
        skyblue: "#91B7D9",
        orange: "#D9985F",
        white: "#ffffff",
        black: "#000000",
      },
    },
  },
  plugins: [],
} satisfies Config;

// npx tailwindcss -i ./app/public/css/input.css -o ./app/public/css/output.css --watch
