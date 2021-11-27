<template>
  <HomeTemplate />
</template>

<script lang="ts">
import Vue from 'vue';
import { booksStore } from '@/store';

export default Vue.extend({
  layout: 'ibook',

  asyncData() {
    console.log(booksStore.books);
  },
});
</script>

<style lang="scss" scoped></style>
