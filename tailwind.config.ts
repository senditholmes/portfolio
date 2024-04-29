import type { Config } from "tailwindcss";

export default {
  content: ["./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;

// npx tailwindcss -i ./public/css/input.css -o ./public/css/output.css --watch
