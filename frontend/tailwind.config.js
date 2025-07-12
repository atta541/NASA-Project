/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.8" },
        },
        kenBurns: {                      
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.15)" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.9)", opacity: "0.6" },
          "70%": { transform: "scale(1.8)", opacity: "0" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "twinkle-slow": "twinkle 4s linear infinite alternate",
        "zoom-slow": "kenBurns 30s linear infinite alternate", 
        "pulse-ring": "pulseRing 2.5s cubic-bezier(0.66,0,0,1) infinite",
      },
    },
  },
  plugins: [],
};
