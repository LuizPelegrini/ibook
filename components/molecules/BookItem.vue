<template>
  <NuxtLink :to="`/books/${book.id}`" class="book-item">
    <img :src="book.cover" :alt="`${book.title}'s cover`" />
    <div class="text">
      <h4>{{ book.title }}</h4>
      <p>{{ book.author }}</p>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { Book } from '@/models';

export default Vue.extend({
  props: {
    book: {
      type: Object,
      required: true,
    } as PropOptions<Book>,
  },
});
</script>

<style lang="scss" scoped>
.book-item {
  color: inherit;
  cursor: pointer;
  display: grid;
  grid-gap: 1.5rem;
  img {
    display: grid;
    width: 100%;
    border-radius: 8px;
    box-shadow: 0px 4px 11px 4px rgba(0, 0, 0, 0.13);
    transition: all 0.3s;
    &:hover {
      transform: scale(1.1);
      box-shadow: 0px 4px 17px 4px rgba(0, 0, 0, 0.11);
    }
  }
  h4 {
    font-size: 0.875rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 13px;
    color: color(dark);
  }
}
</style>
