<template>
  <div class="book-reading-pages">
    <BookPagesSwiperNavigator class="book-reading-pages-navigator" />
    <BookPagesSwiper class="book-reading-pages-swiper" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style lang="scss" scoped>
.book-reading-pages {
  display: grid;
  grid-template-rows: 800px;
  grid-template-columns: 180px 1fr;
  gap: 2rem;
}
</style>
