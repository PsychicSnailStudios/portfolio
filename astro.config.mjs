import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://dawson-e.netlify.app',
    vite: {
        ssr: {
            external: ["svgo"],
        },
    }
});
