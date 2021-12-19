<template>
  <div class="book-page-navigation-item">
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
