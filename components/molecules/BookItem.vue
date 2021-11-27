<template>
  <div class="book-item">
    <BookImage :image="book.image" :alt-text="book.altText" />
    <BookInfo :title="book.title" :author-name="book.authorName" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import type { PropType } from 'vue';

interface Book {
  title: String;
  image: String;
  altText: String;
  authorName: String;
}

export default Vue.extend({
  props: {
    book: {
      type: Object as PropType<Book>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.book-item {
  cursor: pointer;
  .book-image {
    transition: transform 0.3s;
  }
  &:hover {
    .book-image {
      transform: scale(1.05);
    }
  }
}
</style>
