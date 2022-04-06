import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://psychicsnailstudios.github.io',
    base: '/portfolio',
    vite: {
        ssr: {
            external: ["svgo"],
        },
    }
});
