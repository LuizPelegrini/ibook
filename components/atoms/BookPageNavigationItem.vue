<template>
  <div
    :class="['book-page-navigation-item', isCurrentPage ? 'current-page' : '']"
  >
    <div>
      <span v-for="n in 4" :key="n" class="gray-block"></span>
    </div>
    <p>{{ pageNumber }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    pageNumber: {
      type: Number,
      required: true,
    },

    isCurrentPage: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
.book-page-navigation-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid color(dark, base);
  width: 100%;
  height: 100%;
  cursor: pointer;
  &:hover {
    border: 2px solid color(dark, base);
  }
  &.current-page {
    border: 3px solid color(dark, base);
  }
  .gray-block {
    display: block;
    width: 100%;
    height: 8px;
    background-color: color(light, darkest);
    & + .gray-block {
      margin-top: 4px;
    }
  }
  p {
    text-align: center;
    margin-top: 2rem;
  }
}
</style>
