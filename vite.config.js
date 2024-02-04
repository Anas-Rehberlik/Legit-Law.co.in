import path from 'path';

import { defineConfig } from 'vite';


export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',

    rollupOptions: {
    
      input: {
        main: path.resolve(__dirname, './index.html'),
        about: path.resolve(__dirname, './about.html'),
        contact: path.resolve(__dirname, './contact.html'),
        header: path.resolve(__dirname, './header.html'),
        footer: path.resolve(__dirname, './footer.html'),
        privacypolicy: path.resolve(__dirname, './privacy-policy.html'),
        termsandcoditions: path.resolve(__dirname, './terms-and-conditions.html'),


        // main: './index.html',
        // about: './about.html',
        // contact: './contact.html',
        // header: './header.html',
        // footer: './footer.html',
      },
    },
    
  },
});







