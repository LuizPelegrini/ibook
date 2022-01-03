<template>
  <BookDetailsTemplate />
</template>

<script lang="ts">
import Vue from 'vue';
import { booksStore } from '@/store';

export default Vue.extend({
  layout: 'ibook',

  async asyncData({ params, error }) {
    try {
      await booksStore.show(Number(params.id));
    } catch (err) {
      error({ statusCode: 404, message: 'Book not found' });
    }
  },

  head() {
    return {
      title: booksStore.$single?.title || '',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: booksStore.$single?.description || '',
        },
      ],
    };
  },
});
</script>
