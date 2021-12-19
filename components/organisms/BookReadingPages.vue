<template>
  <div class="book-reading-pages">
    <BookPagesSwiperNavigator
      ref="swiper-navigator"
      class="book-reading-pages-navigator"
      @slideChanged="handleSlideChanged"
    />
    <BookPagesSwiper
      ref="swiper-pages"
      class="book-reading-pages-swiper"
      @slide-change="handleSlideSwiped"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

interface SwiperPagesRef {
  slideTo: (slide: Number) => void;
}

export default Vue.extend({
  data() {
    return {
      page: 0,
    };
  },

  methods: {
    handleSlideChanged(slide: Number) {
      const swiperPagesRef = this.$refs['swiper-pages'] as
        | SwiperPagesRef
        | undefined;

      if (swiperPagesRef) swiperPagesRef.slideTo(slide);
    },

    handleSlideSwiped(slide: Number) {
      const swiperNavigatorRef = this.$refs['swiper-navigator'] as
        | SwiperPagesRef
        | undefined;

      if (swiperNavigatorRef) swiperNavigatorRef.slideTo(slide);
    },
  },
});
</script>

<style lang="scss" scoped>
.book-reading-pages {
  display: grid;
  grid-template-rows: 800px;
  grid-template-columns: 180px 1fr;
  gap: 2rem;
}
</style>
