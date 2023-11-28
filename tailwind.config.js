/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./src/**/**/*.{js,ts,jsx,tsx}",
      "./src/**/**/**/*.{js,ts,jsx,tsx}",
   ],
   darkMode: "class",
   theme: {
      extend: {
         fontFamily: {
            sans: ["Montserrat"],
         },
         colors: {
            primary: {
               100: "#e4d8f4",
               200: "#c8b2e9",
               300: "#ad8bdf",
               400: "#9165d4",
               500: "#763ec9",
               600: "#5e32a1",
               700: "#472579",
               800: "#2f1950",
               900: "#180c28",
            },
            success: {
               100: "#e9f9d4",
               200: "#d2f3a9",
               300: "#bcee7e",
               400: "#a5e853",
               500: "#8fe228",
               600: "#72b520",
               700: "#568818",
               800: "#395a10",
               900: "#1d2d08",
            },
            warning: {
               100: "#f6f6d1",
               200: "#edeca4",
               300: "#e3e376",
               400: "#dad949",
               500: "#d1d01b",
               600: "#a7a616",
               700: "#7d7d10",
               800: "#54530b",
               900: "#2a2a05",
            },
            danger: {
               100: "#f9d9da",
               200: "#f3b3b4",
               300: "#ec8d8f",
               400: "#e66769",
               500: "#e04144",
               600: "#b33436",
               700: "#862729",
               800: "#5a1a1b",
               900: "#2d0d0e",
            },
            info: {
               100: "#d4e8f7",
               200: "#a9d2ef",
               300: "#7fbbe6",
               400: "#54a5de",
               500: "#298ed6",
               600: "#2172ab",
               700: "#195580",
               800: "#103956",
               900: "#081c2b",
            },
         },
         animation:{
            "spinner": "spin 1s ease-in-out infinite"
         }
      },
   },
   plugins: [],
}
