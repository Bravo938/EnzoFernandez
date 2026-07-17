/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        night: "#050816",
        blue: {
          DEFAULT: "#3B82F6",
        },
        sky: {
          DEFAULT: "#38BDF8",
        },
        violet: {
          DEFAULT: "#8B5CF6",
        },
        mist: "#F8FAFC",
        gold: "#FFD54A",
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(59, 130, 246, 0.45)",
        "glow-violet": "0 0 60px -10px rgba(139, 92, 246, 0.45)",
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(circle at 50% 30%, rgba(59,130,246,0.18), transparent 60%)",
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.55" },
          "50%": { transform: "scale(1.12)", opacity: "0.85" },
        },
      },
      animation: {
        breathe: "breathe 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
