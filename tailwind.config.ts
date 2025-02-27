import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary : "var(--primary-color)",
        gray1 : "var(--gray1)",
        gray2 : "var(--gray2)",
        gray3 : "var(--gray3)",
        gray6 : "var(--gray6)",
      },
    },
  },
  plugins: [],
} satisfies Config;
