import type { Config } from "tailwindcss";

export default {
  content: ["./app/public/*.{html,js}", "./app/public/templates/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Ubuntu", "sans-serif"],
        header: ["Rajdhani", "sans-serif"],
        text: ["Assistant", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;

// npx tailwindcss -i ./app/public/css/input.css -o ./app/public/css/output.css --watch
