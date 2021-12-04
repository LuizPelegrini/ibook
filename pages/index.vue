<template>
  <!-- <HomeTemplate /> -->
  <pre>{{ $all }}</pre>
</template>

<script lang="ts">
import Vue from 'vue';
import { booksStore } from '@/store';

export default Vue.extend({
  layout: 'ibook',

  async asyncData() {
    await booksStore.index();
  },

  computed: {
    $all() {
      return booksStore.$all;
    },
  },
});
</script>

<style lang="scss" scoped></style>
