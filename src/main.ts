import type { App, Plugin } from 'vue';
import VuePaginate from '@/VuePaginate.vue';

const VuePaginatePlugin = Object.assign(VuePaginate, {
  install: (app: App) => {
    app.component(VuePaginate.name, VuePaginate);
  }
} as Plugin);

export { VuePaginate };

export default VuePaginatePlugin;
