/** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {fontFamily: {
//          roboto: "'Roboto Slab', serif", // Adds a new `font-roboto` class 
//         Raleway: "'Playfair Display', serif", // Adds a new `font-Raleway` class
//       }},
//   },
//   plugins: [],
//   purge: [
//     './src/**/*.{js,jsx,ts,tsx}',
//     './public/index.html',
//   ],
// }


/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Slab", "serif"], // Adds a new `font-roboto` class 
        playfair: ["Playfair Display", "serif"], // Adds a new `font-playfair` class
      },
    },
  },
  plugins: [],

});



