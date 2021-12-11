<template>
  <div class="book-categories">
    <div v-if="$book">
      <Chip
        v-for="category in $book.categories"
        :key="category.id"
        :text="category.name"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { booksStore } from '@/store';

export default Vue.extend({
  computed: {
    $book() {
      return booksStore.$single;
    },
  },
});
</script>

<style lang="scss" scoped>
.book-categories {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  grid-gap: 0.5rem;
}
</style>
