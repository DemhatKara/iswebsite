import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './',
  index: 'index.html',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'portfolio-1': resolve(__dirname, 'portfolio-1.html'),
        services: resolve(__dirname, 'services.html'),
        'service-single': resolve(__dirname, 'service.html'),
        'project-1': resolve(__dirname, 'project-1.html'),
        blog: resolve(__dirname, 'blog.html'),
        'blog-inner': resolve(__dirname, 'blog-inner.html'),
        publication: resolve(__dirname, 'publication.html'),
        contact: resolve(__dirname, 'contact.html'),
        team: resolve(__dirname, 'team.html'),
        404: resolve(__dirname, '404.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
