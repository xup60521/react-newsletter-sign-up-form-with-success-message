/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_background: "#36384c",
                c_charcoal_gray: "hsl(235, 18%, 26%)",
                c_grey: "hsl(231, 7%, 60%)"
            },
            fontFamily: {
                roboto: ["Roboto", "sans-serif"]
            }
        },
    },
    plugins: [],
}

