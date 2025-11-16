// /** @type {import('tailwindcss').Config} */

// import withMT from "@material-tailwind/react/utils/withMT";

// export default withMT({
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         roboto: ["Roboto Slab", "serif"],
//         playfair: ["Playfair Display", "serif"],
//         parisienne: ["Parisienne", "cursive"],

//       },
//     },
//   },
//   plugins: [],
// });

/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Elegant Serif Fonts
        playfair: ["Playfair Display", "serif"],
        cormorant: ["Cormorant Garamond", "serif"],
        dancing: ["Dancing Script", "cursive"],
        greatvibes: ["Great Vibe", "cursive"],

        // Modern Sans-serif Fonts
        roboto: ["Roboto Slab", "serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        lato: ["Lato", "sans-serif"],

        // Romantic & Decorative Fonts (Perfect for matrimonial site)
        parisienne: ["Parisienne", "cursive"],
        sacramento: ["Sacramento", "cursive"],

        // Clean & Professional
        opensans: ["Open Sans", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        // Custom color palette for matrimonial theme
        romantic: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
        },
        elegant: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      backgroundImage: {
        "romantic-gradient":
          "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)",
        "elegant-gradient": "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
        "gold-gradient": "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "pulse-soft": "pulseSoft 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
});
