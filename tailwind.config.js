/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./www/**/*.{html,js,ts,jsx,tsx}", // Adjust this path to include all your HTML and JS files where Tailwind classes are used
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
