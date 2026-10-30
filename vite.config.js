import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

const racine = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    base: './',
    plugins: [tailwindcss()],
    build: {
        rolldownOptions: {
            input: {
                accueil: resolve(racine, 'index.html'),
                parcelles: resolve(racine, 'parcelles.html'),
                agenda: resolve(racine, 'agenda.html'),
                adhesion: resolve(racine, 'adhesion.html'),
                contact: resolve(racine, 'contact.html'),
                mentionsLegales: resolve(racine, 'mentions-legales.html'),
            },
        },
    },
});
