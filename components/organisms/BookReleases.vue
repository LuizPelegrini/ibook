<template>
  <div class="book-releases">
    <h2>Releases</h2>
    <BookItem v-for="(book, index) in books" :key="index" :book="book" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      books: [
        {
          title: 'Hello',
          image:
            'https://avatars.githubusercontent.com/u/28706372?s=88&u=4a401a8a0f03e301ab349d6ecf5d4df0225f0cc5&v=4',
          altText: 'Alternative Text',
          authorName: 'Luiz',
        },
      ],
    };
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
}
</style>
