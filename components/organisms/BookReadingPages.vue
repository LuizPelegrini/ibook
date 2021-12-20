<template>
  <div class="book-reading-pages">
    <BookTitle :title="$title" />
    <div class="book-reading-pages-content">
      <BookPagesSwiperNavigator
        ref="swiper-navigator"
        class="book-reading-pages-navigator"
        :page="page"
        @slideChanged="handleSlideChanged"
      />
      <BookPagesSwiper
        ref="swiper-pages"
        class="book-reading-pages-swiper"
        @slide-change="handleSlideSwiped"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { booksStore } from '@/store';

interface SwiperPagesRef {
  slideTo: (slide: Number) => void;
}

export default Vue.extend({
  data() {
    return {
      page: 0,
    };
  },

  computed: {
    $title() {
      return booksStore.$single?.title;
    },
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
.book-reading-pages-content {
  display: grid;
  grid-template-rows: 800px;
  grid-template-columns: 180px 1fr;
  gap: 2rem;
  margin-top: 1.5rem;
}
</style>
