/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}", // aman meski pakai App Router
    ],
    theme: {
        extend: {
        },
        colors: {
            color: {
                primary: '#eeeeee',
                accent: '#ffc639',
                secondary: '#393e46',
                dark: '#222831'
            }
        }
    },
    plugins: [],
}