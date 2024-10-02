/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            textShadow: { // Menambahkan custom text shadow
                'default': '2px 2px 4px rgba(0, 0, 0, 0.5)',
                'md': '4px 4px 6px rgba(0, 0, 0, 0.6)',
                'lg': '6px 6px 8px rgba(0, 0, 0, 0.7)',
            }
        },
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                '.text-shadow': {
                    'text-shadow': '-3px 1px rgba(239, 68, 68, 1)',
                },
                '.text-shadow-md': {
                    'text-shadow': '4px 4px 6px rgba(0, 0, 0, 0.6)',
                },
                '.text-shadow-lg': {
                    'text-shadow': '6px 6px 8px rgba(0, 0, 0, 0.7)',
                },
            }

            addUtilities(newUtilities, ['responsive', 'hover'])
        }
    ],
}
