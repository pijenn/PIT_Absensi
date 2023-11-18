/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
        },
    theme: { 
        extend: {
            colors:{
                "primary":"#ee333d",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },

        },
    },
    plugins: [],
}
}
