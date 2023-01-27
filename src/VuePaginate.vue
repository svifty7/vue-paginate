<template>
  <ul
    v-if="!noLiSurround"
    :class="containerClass"
  >
    <li
      v-if="firstLastButton"
      :class="[pageClass, firstPageSelected() ? disabledClass : '']"
    >
      <a
        :class="pageLinkClass"
        :tabindex="firstPageSelected() ? -1 : 0"
        @click="selectFirstPage()"
        @keyup.enter="selectFirstPage()"
      >
        <slot name="firstBtnText">
          {{ firstButtonText }}
        </slot>
      </a>
    </li>

    <li
      v-if="!(firstPageSelected() && hidePrevNext)"
      :class="[prevClass, firstPageSelected() ? disabledClass : '']"
    >
      <a
        :class="prevLinkClass"
        :tabindex="firstPageSelected() ? -1 : 0"
        @click="prevPage()"
        @keyup.enter="prevPage()"
      >
        <slot name="prevBtnText">
          {{ prevText }}
        </slot>
      </a>
    </li>

    <li
      v-for="(page, key) in pages"
      :key="key"
      :class="[
        pageClass,
        page?.selected
          ? activeClass
          : '',
        page?.disabled
          ? disabledClass
          : '',
        page?.breakView
          ? breakViewClass
          : '',
      ]"
    >
      <a
        v-if="page?.breakView"
        :class="[pageLinkClass, breakViewLinkClass]"
        tabindex="0"
      >
        <slot name="breakViewContent">
          {{ breakViewText }}
        </slot>
      </a>

      <a
        v-else-if="page?.disabled"
        :class="pageLinkClass"
        tabindex="0"
      >{{ page?.content }}</a>

      <a
        v-else
        :class="pageLinkClass"
        tabindex="0"
        @click="handlePageSelected(page.index + 1)"
        @keyup.enter="handlePageSelected(page.index + 1)"
      >{{ page?.content }}</a>
    </li>

    <li
      v-if="!(lastPageSelected() && hidePrevNext)"
      :class="[nextClass, lastPageSelected() ? disabledClass : '']"
    >
      <a
        :class="nextLinkClass"
        :tabindex="lastPageSelected() ? -1 : 0"
        @click="nextPage()"
        @keyup.enter="nextPage()"
      >
        <slot name="nextBtnText">
          {{ nextText }}
        </slot>
      </a>
    </li>

    <li
      v-if="firstLastButton"
      :class="[pageClass, lastPageSelected() ? disabledClass : '']"
    >
      <a
        :class="pageLinkClass"
        :tabindex="lastPageSelected() ? -1 : 0"
        @click="selectLastPage()"
        @keyup.enter="selectLastPage()"
      >
        <slot name="lastBtnText">
          {{ lastButtonText }}
        </slot>
      </a>
    </li>
  </ul>

  <div
    v-else
    :class="containerClass"
  >
    <a
      v-if="firstLastButton"
      :class="[pageLinkClass, firstPageSelected() ? disabledClass : '']"
      tabindex="0"
      @click="selectFirstPage()"
      @keyup.enter="selectFirstPage()"
    >
      <slot name="firstBtnText">
        {{ firstButtonText }}
      </slot>
    </a>

    <a
      v-if="!(firstPageSelected() && hidePrevNext)"
      :class="[prevLinkClass, firstPageSelected() ? disabledClass : '']"
      tabindex="0"
      @click="prevPage()"
      @keyup.enter="prevPage()"
    >
      <slot name="prevBtnText">
        {{ prevText }}
      </slot>
    </a>

    <template
      v-for="(page, key) in pages"
      :key="key"
    >
      <a
        v-if="page?.breakView"
        :class="[pageLinkClass, breakViewLinkClass, page?.disabled ? disabledClass : '']"
        tabindex="0"
      >
        <slot name="breakViewContent">
          {{ breakViewText }}
        </slot>
      </a>

      <a
        v-else-if="page?.disabled"
        :class="[pageLinkClass, page?.selected ? activeClass : '', disabledClass]"
        tabindex="0"
      >{{ page?.content }}</a>

      <a
        v-else
        :class="[pageLinkClass, page?.selected ? activeClass : '']"
        tabindex="0"
        @click="handlePageSelected(page.index + 1)"
        @keyup.enter="handlePageSelected(page.index + 1)"
      >{{ page?.content }}</a>
    </template>

    <a
      v-if="!(lastPageSelected() && hidePrevNext)"
      :class="[nextLinkClass, lastPageSelected() ? disabledClass : '']"
      tabindex="0"
      @click="nextPage()"
      @keyup.enter="nextPage()"
    >
      <slot name="nextBtnText">
        {{ nextText }}
      </slot>
    </a>

    <a
      v-if="firstLastButton"
      :class="[pageLinkClass, lastPageSelected() ? disabledClass : '']"
      tabindex="0"
      @click="selectLastPage()"
      @keyup.enter="selectLastPage()"
    >
      <slot name="lastBtnText">
        {{ lastButtonText }}
      </slot>
    </a>
  </div>
</template>

<script lang="ts" setup>
  import {
    computed, onBeforeUpdate, ref
  } from 'vue';

  export type TVuePaginatePage = {
    index: number
    content?: number
    selected?: boolean
    disabled?: boolean
    breakView?: boolean
  }

  export type TVuePaginateProps = {
    modelValue?: number
    forcePage?: number
    containerClass?: string
    pageClass?: string
    pageLinkClass?: string
    prevClass?: string
    prevLinkClass?: string
    nextClass?: string
    nextLinkClass?: string
    breakViewClass?: string
    breakViewLinkClass?: string
    pageCount: number
    clickHandler?: Function
    pageRange?: number
    marginPages?: number
    prevText?: string
    nextText?: string
    breakViewText?: string
    activeClass?: string
    disabledClass?: string
    noLiSurround?: boolean
    firstLastButton?: boolean
    firstButtonText?: string
    lastButtonText?: string
    hidePrevNext?: boolean
  }

  const props = withDefaults(
    defineProps<TVuePaginateProps>(),
    {
      clickHandler: () => {},
      pageRange: 3,
      marginPages: 1,
      prevText: 'Prev',
      nextText: 'Next',
      breakViewText: '…',
      activeClass: 'active',
      disabledClass: 'disabled',
      noLiSurround: false,
      firstLastButton: false,
      firstButtonText: 'First',
      lastButtonText: 'Last',
      hidePrevNext: false
    }
  );

  const emit = defineEmits(['update:modelValue']);

  const innerValue = ref(1);

  const selected = computed({
    get: () => props.modelValue || innerValue.value,
    set: newValue => {
      innerValue.value = newValue;
    }
  });

  const pages = computed(() => {
    const items: Array<TVuePaginatePage> = [];

    if (props.pageCount <= props.pageRange) {
      for (let index = 0; index < props.pageCount; index++) {
        items[index] = {
          index,
          content: index + 1,
          selected: index === (selected.value - 1)
        };
      }
    }

    if (props.pageCount > props.pageRange) {
      const halfPageRange = Math.floor(props.pageRange / 2);

      const setPageItem = (index: number) => {
        items[index] = {
          index,
          content: index + 1,
          selected: index === (selected.value - 1)
        };
      };

      const setBreakView = (index: number) => {
        items[index] = {
          index,
          disabled: true,
          breakView: true
        };
      };

      // 1st - loop through low end of margin pages
      for (let i = 0; i < props.marginPages; i++) {
        setPageItem(i);
      }

      // 2nd - loop through selected range
      let selectedRangeLow = 0;

      if (selected.value - halfPageRange > 0) {
        selectedRangeLow = selected.value - 1 - halfPageRange;
      }

      let selectedRangeHigh = selectedRangeLow + props.pageRange - 1;

      if (selectedRangeHigh >= props.pageCount) {
        selectedRangeHigh = props.pageCount - 1;
        selectedRangeLow = selectedRangeHigh - props.pageRange + 1;
      }

      for (let i = selectedRangeLow; i <= selectedRangeHigh && i <= props.pageCount - 1; i++) {
        setPageItem(i);
      }

      // Check if there is breakView in the left of selected range.
      if (selectedRangeLow > props.marginPages) {
        setBreakView(selectedRangeLow - 1);
      }

      // Check if there is breakView in the right of selected range.
      if (selectedRangeHigh + 1 < props.pageCount - props.marginPages) {
        setBreakView(selectedRangeHigh + 1);
      }

      // 3rd - loop through high end of margin pages
      for (let i = props.pageCount - 1; i >= props.pageCount - props.marginPages; i--) {
        setPageItem(i);
      }
    }

    // TODO: Fix this hardcode
    return items.filter(page => !!page);
  });

  const handlePageSelected = (newSelected: number) => {
    if (selected.value === newSelected) return;

    innerValue.value = newSelected;

    emit('update:modelValue', newSelected);

    props.clickHandler(newSelected);
  };

  const prevPage = () => {
    if (selected.value <= 1) return;

    handlePageSelected(selected.value - 1);
  };

  const nextPage = () => {
    if (selected.value >= props.pageCount) return;

    handlePageSelected(selected.value + 1);
  };

  const firstPageSelected = () => selected.value === 1;

  const lastPageSelected = () => (selected.value === props.pageCount) || (props.pageCount === 0);

  const selectFirstPage = () => {
    if (selected.value <= 1) return;

    handlePageSelected(1);
  };

  const selectLastPage = () => {
    if (selected.value >= props.pageCount) return;

    handlePageSelected(props.pageCount);
  };

  onBeforeUpdate(() => {
    if (props.forcePage === undefined) return;

    if (props.forcePage !== selected.value) {
      selected.value = props.forcePage;
    }
  });
</script>

<style scoped>
  a {
    cursor: pointer;
    user-select: none;
  }
</style>
