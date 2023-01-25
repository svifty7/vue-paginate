# vue-paginate
Vue 3 component to make pagination. Fork of [vuejs-paginate](https://github.com/lokyoung/vuejs-paginate).

Easy to use by providing simple api, and you can customize the style of this component by CSS.

<VuePaginatePreview />

<script>
  import VuePaginatePreview from './.vitepress/components/VuePaginatePreview.vue';

  export default {
    components: {
      VuePaginatePreview
    }
  }
</script>

::: details Demo code
```vue
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

<script lang="tsx">
  import { defineComponent, ref } from 'vue';
  import VuePaginate from 'vue-paginate';

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

<style lang="scss">
  @import "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.10/components/menu.min.css";

  .ui {
    &.pagination {
      &.menu {
        background: var(--vp-c-text-1);

        .item,
        .item.active,
        .item:hover {
          color: var(--vp-c-bg);
        }
      }
    }
  }
</style>
```
:::

## Installation

### NPM

Install the npm package.
```bash
npm install vue-paginate --save
```

Register the component
```js
import { createApp } from 'vue';
import VuePaginate from 'vue-paginate';

const app = createApp();

app.component('vue-paginate', VuePaginate);
```

or use directly in component
```vue
<template>
  <vue-paginate :page-count="20" />
</template>

<script setup>
  import VuePaginate from 'vue-paginate';
</script>
```
## Usage
### Example
```vue
<template>
  <vue-paginate
    :model-value="page"
    :page-count="20"
    :page-range="3"
    :margin-pages="2"
    :click-handler="clickCallback"
    prev-text="Prev"
    next-text="Next"
    container-class="pagination"
    page-class="page-item"
    @update:model-value="page = $event"
  />
</template>

<script>
  import { defineComponent, ref } from 'vue';
  import VuePaginate from 'vue-paginate';
  
  export default defineComponent({
    components: {
      VuePaginate
    },
    setup() {
      const page = ref(10);
      
      const clickCallback = (pageNum) => {
        console.log(pageNum)
      };
      
      return {
        page,
        clickCallback
      }
    }
  })
</script>
```

### Value Binding
Use `v-model` to set the selected page number. You can programmatically modify the current page by using this.

```vue
<template>
  <vue-paginate
    v-model="page"
    :page-count="20"
  />
</template>

<script>
  import { defineComponent, ref } from 'vue';
  import VuePaginate from 'vue-paginate';

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
```

## Props
| Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Type | Description |
| ----------------- | :--- | :--- |
| `page-count`      | `Number` | Total count of pages. **required** |
| `page-range`      | `Number` | Range of pages which displayed. **default: 3** <br> *(Note: It is recommended to use an odd number, so that the same number of pages are displayed before and after the active page. If using an even number, there will be one more page number before the active page than after the current page)* |
| `margin-pages`    | `Number` | The number of displayed pages for margins. **default: 1** |
| `prev-text`       | `String` | Text for the previous button. You can use HTML here. **default: Prev**  |
| `next-text`       | `String` | Text for the next button. You can use HTML here. **default: Next**  |
| `break-view-text` | `String` | Text for the break view indicator. **default: ...**  |
| `force-page`      | `Number` | The page number of overridden selected page. |
| `click-handler`   | `Function` | The method to call when page clicked. Use clicked page number as parameter. |
| `container-class` | `String` | CSS class name for the layout. |
| `page-class`      | `String` | CSS class name for tag `li` of each page element. |
| `page-link-class` | `String` | CSS class name for tag `a` of each page element. |
| `prev-class`      | `String` | CSS class name for tag `li` of `previous` element. |
| `prev-link-class` | `String` | CSS class name for tag `a` of `previous` element. |
| `next-class`      | `String` | CSS class name for tag `li` of `next` element. |
| `next-link-class` | `String` | CSS class name for tag `a` of `next` element. |
| `break-view-class` | `String` | CSS class name for tag `li` of `break view` element. |
| `break-view-link-class` | `String` | CSS class name for tag `a` of `break view` element. |
| `active-class` | `String` | CSS class name for active page element. **default: active** |
| `disabled-class` | `String` | CSS class name for disabled page element. **default: disabled** |
| `no-li-surround` | `Boolean` | Support no `li` tag surround `a` tag. **default: false** |
| `first-last-button` | `Boolean` | Support buttons to turn to the first and last page. **default: false** |
| `first-button-text` | `String` | Text for first button. (Not visible when `first-last-button` is false. You can use HTML here.) **default: 'First'** |
| `last-button-text` | `String` | Text for last button. (Not visible when `first-last-button` is false. You can use HTML here.) **default: 'Last'** |
| `hide-prev-next` | `Boolean` | Hide prev/next button when there is no previous or next page. **default: false** |

## Customize inner HTML (experimental)
You can customize the inner HTML of the first page button, previous page button, next page button, last page button and break view indicator by the `slot`.

**Slot names**

| Name | Description          |
| --- |----------------------|
| `first-button-text` | First page button    |
| `prev-text` | Previous page button |
| `breakViewContent` | Break view indicator |
| `next-text` | Next page button     |
| `last-button-text` | Last page button     |

**Example**
```vue
<vue-paginate
  v-model="page"
  :page-count="10"
  first-button-text="first page"
  prev-text="prev text"
  break-view-text="...?..."
  next-text="next text"
  last-button-text="last page"
>
  <template #firstBtnText>Changed first text button</template>
  
  <template #prevBtnText>Changed prev text button</template>
  
  <template #nextBtnText>Changed next text button</template>
  
  <template #lastBtnText>Changed last text button</template>
  
  <template #breakViewContent>
    <svg width="16" height="4" viewBox="0 0 16 4">
      <circle fill="#999999" cx="2" cy="2" r="2" />
      <circle fill="#999999" cx="8" cy="2" r="2" />
      <circle fill="#999999" cx="14" cy="2" r="2" />
    </svg>
  </template>
</vue-paginate>

<script>
  import { defineComponent, ref } from 'vue';
  import VuePaginate from 'vue-paginate';

  export default defineComponent({
    components: {
      VuePaginate
    },
    setup() {
      const page = ref(5);

      return {
        page
      }
    }
  })
</script>
```
