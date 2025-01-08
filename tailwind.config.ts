import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "light-cream": "#F4FFC3",
        "light-green": "#A9C46C",
        "olive-green": "#809D3C",
        "dark-olive-green": "#5D8736",
      },
    },
  },
  plugins: [],
} satisfies Config;
