<template>
  <ReadTemplate />
</template>

<script lang="ts">
import Vue from 'vue';
import 'swiper/css/swiper.css'; // import swiper css only for the read page
import { booksStore } from '@/store';

export default Vue.extend({
  layout: 'ibook',

  async asyncData({ params }) {
    await booksStore.show(Number(params.id));
  },
});
</script>
