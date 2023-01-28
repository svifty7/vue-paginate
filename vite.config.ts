import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import * as path from 'path';

// https://vitejs.dev/config/
export default () => defineConfig({
  publicDir: false,
  plugins: [
    vue(),
    dts({
      outputDir: 'types',
      insertTypesEntry: true,
      cleanVueFileName: true,
      include: ['./src/index.ts', './src/VuePaginate.vue']
    })
  ],
  build: {
    sourcemap: true,
    target: 'es2015',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.ts')
      },

      // @ts-ignore
      output: {
        globals: {
          vue: 'Vue'
        },
        exports: 'named'
      },
      external: ['vue']
    },
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      fileName: format => `vue-paginate.${ format }.js`,
      name: 'VuePaginate',
      formats: [
        'es',
        'umd',
        'cjs'
      ]
    }
  }
});
