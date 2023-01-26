import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import * as path from 'path';

// https://vitejs.dev/config/
export default () => defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      cleanVueFileName: true,
      include: ['./src/main.ts', './src/VuePaginate.vue']
    })
  ],
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/main.ts')
      },

      // @ts-ignore
      output: {
        globals: {
          vue: 'Vue'
        },
        exports: 'named',
        assetFileNames: assetInfo => {
          if (assetInfo.name === 'main.css') return 'vue-paginate.css';

          return assetInfo.name;
        }
      },
      external: ['vue']
    },
    lib: {
      entry: path.resolve(__dirname, '/src/main.ts'),
      fileName: format => `vue-paginate.${ format }.js`,
      name: 'VuePaginate',
      formats: ['es', 'umd']
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});
