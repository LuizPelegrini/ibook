<template>
  <div class="book-page-navigation-item">
    <div v-for="n in 4" :key="n" class="gray-block"></div>
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
  },
});
</script>

<style lang="scss" scoped>
.book-page-navigation-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 1px solid color(dark, base);
  .gray-block {
    width: 100%;
    height: 8px;
    background-color: color(light, darkest);
    & + .gray-block {
      margin-top: 4px;
    }
  }
  p {
    margin-top: 2rem;
  }
}
</style>
