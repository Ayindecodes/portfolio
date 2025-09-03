// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      container: { center: true, padding: "1rem" },
      colors: { brand: "hsl(var(--brand))" },
      boxShadow: { glow: "0 10px 30px -10px rgba(124,58,237,.6)" },
    },
  },
  plugins: [],
};
export default config;
