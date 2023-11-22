/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/tw-elements/dist/js/**/*.js",
    ],

    theme: {
        extend: {
            colors: {
                primary: "#ee333d",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            transitionDuration: {
                2000: "2000ms",
            },
        },
        safelist: ["animate-[jiggle_0.5s]", "animate-[jiggle_0.5s]"],
    },

    plugins: [
        daisyui,
        require("tailwindcss-animated"),
        require("tw-elements/dist/plugin.cjs"),
    ],
};

