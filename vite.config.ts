import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      css: {
        additionalData:
          '@import "froala-editor/css/froala_style.min.css"; @import "froala-editor/css/froala_editor.pkgd.min.css"; @import "froala-editor/js/plugins.pkgd.min.js";',
      },
    },
  },
});
