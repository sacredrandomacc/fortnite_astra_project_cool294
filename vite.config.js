import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // A self-contained WebGL engine and original procedural assets are bundled locally.
    chunkSizeWarningLimit: 750,
    rollupOptions: { output: { manualChunks: { engine: ['three'] } } },
  },
});
