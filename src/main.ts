import type { App } from 'vue';
import VuePaginate from '@/VuePaginate.vue';

export default {
  install: (app: App) => {
    // eslint-disable-next-line vue/match-component-file-name
    app.component('VuePaginate', VuePaginate);
  }
};

export { VuePaginate };
