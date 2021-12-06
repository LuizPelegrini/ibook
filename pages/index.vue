<template>
  <HomeTemplate />
</template>

<script lang="ts">
import Vue from 'vue';
import { booksStore } from '@/store';

export default Vue.extend({
  layout: 'ibook',

  async asyncData() {
    await booksStore.index();
  },
});
</script>
