/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            maxWidth: {
                "view": "1440px"
            },
            colors: {
                "custom-gray-100": "#FAFAFA",
                "custom-gray-200": "#F5F5F5",
                "custom-gray-300": "#E0E0E0",
                "custom-gray-400": "#BDBDBD",
                "custom-gray-500": "#9E9E9E",
                "custom-gray-600": "#757575",
                "custom-gray-700": "#424242",
                "custom-gray-800": "#212121",
                "custom-gray-900": "#020202",


            }
        },
    },
    plugins: [],
};