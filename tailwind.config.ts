import type { Config } from "tailwindcss";

export default {
  content: ["./app/public/views/*.{html,js,ejs}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;

// npx tailwindcss -i ./app/public/css/input.css -o ./app/public/css/output.css --watch
