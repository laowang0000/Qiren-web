import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050812",
          900: "#090e1d",
          850: "#0d1426",
          800: "#121b30",
        },
        electric: {
          blue: "#58a6ff",
          cyan: "#6ee7f9",
          violet: "#9b7cff",
        },
      },
      boxShadow: {
        glow: "0 24px 80px rgba(88, 166, 255, 0.18)",
        glass: "0 18px 60px rgba(0, 0, 0, 0.28)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(circle at 20% 20%, rgba(88, 166, 255, 0.20), transparent 32%), radial-gradient(circle at 80% 10%, rgba(155, 124, 255, 0.22), transparent 30%), radial-gradient(circle at 50% 90%, rgba(110, 231, 249, 0.12), transparent 36%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
