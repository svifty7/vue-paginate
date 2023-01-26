<template>
  <div>
    <vue-paginate
      v-model="page"
      :page-count="20"
      :margin-pages="2"
      :page-range="5"
      :container-class="'ui pagination menu'"
      :page-link-class="'item'"
      :prev-link-class="'item'"
      :next-link-class="'item'"
      :break-view-link-class="'break-view-link'"
      :no-li-surround="true"
    >
      <template #prevBtnText>
        <div style="-webkit-transform: rotate(90deg); transform: rotate(90deg);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 9L11.2929 15.2929C11.6834 15.6834 12.3166 15.6834 12.7071 15.2929L19 9" stroke="var(--vp-c-bg)"
                  stroke-linecap="round" stroke-linejoin="round"
            />
          </svg>
        </div>
      </template>

      <template #nextBtnText>
        <div style="-webkit-transform: rotate(-90deg); transform: rotate(-90deg);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 9L11.2929 15.2929C11.6834 15.6834 12.3166 15.6834 12.7071 15.2929L19 9" stroke="var(--vp-c-bg)"
                  stroke-linecap="round" stroke-linejoin="round"
            />
          </svg>
        </div>
      </template>
    </vue-paginate>
  </div>

  <br/>

  <div>Current page: <b>{{ page }}</b></div>
</template>

<script lang="ts">
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
      };
    }
  });
</script>

<style>
  @import "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.10/components/menu.min.css";

  .ui.pagination.menu {
    background: var(--vp-c-text-1);
  }

  .ui.pagination.menu .item,
  .ui.pagination.menu .item.active,
  .ui.pagination.menu .item:hover {
    color: var(--vp-c-bg);
  }
</style>
