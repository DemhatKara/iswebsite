import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'home-1.html'),
        'home-2': resolve(__dirname, 'home-2.html'),
        'portfolio-1': resolve(__dirname, 'portfolio-1.html'),
        'portfolio-2': resolve(__dirname, 'portfolio-2.html'),
        'portfolio-3': resolve(__dirname, 'portfolio-3.html'),
        services: resolve(__dirname, 'services.html'),
        'service-single': resolve(__dirname, 'service.html'),
        'project-1': resolve(__dirname, 'project-1.html'),
        'project-2': resolve(__dirname, 'project-2.html'),
        'project-3': resolve(__dirname, 'project-3.html'),
        'project-4': resolve(__dirname, 'project-4.html'),
        'project-5': resolve(__dirname, 'project-5.html'),
        'project-6': resolve(__dirname, 'project-6.html'),
        blog: resolve(__dirname, 'blog.html'),
        'blog-inner': resolve(__dirname, 'blog-inner.html'),
        publication: resolve(__dirname, 'publication.html'),
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
