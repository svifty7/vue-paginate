<template>
  <vue-paginate
    v-model="page"
    :page-count="20"
  />
</template>

<script>
  import { defineComponent, ref } from 'vue';
  import VuePaginate from '../../../src/VuePaginate.vue';

  export default defineComponent({
    components: {
      VuePaginate
    },
    setup() {
      const page = ref(10);

      return {
        page
      }
    }
  })
</script>

<style lang="scss">
  @import "https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css";
  @import "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.10/components/menu.min.css";
</style>
