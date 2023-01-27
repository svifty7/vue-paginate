import type { App, Plugin } from 'vue';
import VuePaginate from '@/VuePaginate.vue';

const VuePaginatePlugin = {
  install: (app: App) => {
    // eslint-disable-next-line vue/match-component-file-name
    app.component('VuePaginate', VuePaginate);
  }
} as Plugin;

export { VuePaginate };

export default VuePaginatePlugin;
