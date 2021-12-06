<template>
  <div class="book-releases">
    <h2>Releases</h2>
    <ul class="book-list">
      <li v-for="book in $books" :key="book.id">
        <BookItem :book="book" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { booksStore } from '@/store';

export default Vue.extend({
  computed: {
    $books() {
      return booksStore.$all;
    },
  },
});
</script>

<style lang="scss" scoped>
.book-releases {
  display: grid;
  grid-gap: 1.3rem;
  h2 {
    font-size: 1.375rem;
    font-weight: 500;
    color: color(dark, darkest);
  }
  .book-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    grid-gap: 2rem;
    @include screen('small') {
    }
    @include screen('medium') {
      grid-template-columns: repeat(3, 1fr);
    }
    @include screen('large') {
      grid-template-columns: repeat(6, 1fr);
    }
  }
}
</style>
