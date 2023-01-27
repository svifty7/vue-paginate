# vue-paginate
Vue 3 component to make pagination. Fork of [vuejs-paginate](https://github.com/lokyoung/vuejs-paginate).

Easy to use by providing simple api, and you can customize the style of this component by CSS.

See [Documentation & Demo](https://svifty7.github.io/vue-paginate)

## Installation
### NPM

Install the npm package.
```bash
npm install @svifty7/vue-paginate --save
```

Register the component
```js
import { createApp } from 'vue';
import VuePaginatePlugin from '@svifty7/vue-paginate';

const app = createApp();

app.component('vue-paginate', VuePaginatePlugin);
```

or use directly in component
```vue
<template>
  <vue-paginate :page-count="20" />
</template>

<script setup>
  import { VuePaginate } from '@svifty7/vue-paginate';
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
You can customize the inner HTML of the first page button, previous page button, next page button, last page button and break view indicator, with the `slot` tag.

**Slot names**

| Name | Description          |
| --- |----------------------|
| `first-button-text` | First page button    |
| `prev-text` | Previous page button |
| `breakViewContent` | Break view indicator |
| `next-text` | Next page button     |
| `last-button-text` | Last page button     |
