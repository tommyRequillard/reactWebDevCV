/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Couleurs principales
                'cvblue': '#3b82f6',        // Bleu principal
                'cvblued': '#1e40af',       // Bleu foncé
                'cvbluetitle': '#2563eb',   // Bleu pour les titres
                'gold': '#fbbf24',          // Or/Doré

                // Couleurs de fond
                'dark': '#1f2937',          // Fond sombre principal
                'greylight': '#374151',     // Gris léger pour hover
                'greylighter': '#4b5563',   // Gris plus léger
            },
        },
    },
    plugins: [],
}
