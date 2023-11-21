/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
        
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
    
    
    plugins: [daisyui],
}

