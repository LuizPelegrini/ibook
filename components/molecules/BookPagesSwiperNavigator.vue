<template>
  <div class="book-pages-swiper-navigator">
    <Swiper class="swiper" :options="swiperOptions">
      <SwiperSlide v-for="page in $book.pages" :key="page.id" :class="page.id">
        <BookPageNavigationItem :page-number="page.pageNumber" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import SwiperMixin from '@/mixins/swiper';

export default Vue.extend({
  mixins: [SwiperMixin],

  data() {
    return {
      swiperOptions: {
        direction: 'vertical',
        slidesPerView: 3,
        spaceBetween: 20,
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.book-pages-swiper-navigator {
  width: 100%;
  height: 100%;
  .swiper {
    height: 100%;
  }
}
</style>
