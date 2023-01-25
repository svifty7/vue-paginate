import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsxPlugin from '@vitejs/plugin-vue-jsx';
import * as path from 'path';

// https://vitejs.dev/config/
export default () => defineConfig({
  plugins: [vue(), vueJsxPlugin()],
  build: {
    rollupOptions: {
      // @ts-ignore
      output: {
        assetFileNames: assetInfo => {
          if (assetInfo.name === 'style.css') return 'vue-paginate.css';

          return assetInfo.name;
        }
      }
    },
    lib: {
      entry: path.resolve(__dirname, '/src/index.ts'),
      fileName: 'vue-paginate',
      name: 'VuePaginate',
      formats: ['es', 'umd']
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
