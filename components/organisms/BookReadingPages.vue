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
    <BookPageNavigationArrows
      class="swiper-navigation"
      @clickPrev="handleClickNavigation(-1)"
      @clickNext="handleClickNavigation(1)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { booksStore } from '@/store';

interface SwiperRef {
  slideTo: (slide: number) => void;
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
    handleSlideChanged(slide: number) {
      const swiperPagesRef = this.$refs['swiper-pages'] as
        | SwiperRef
        | undefined;

      if (swiperPagesRef) {
        this.page = slide;
        swiperPagesRef.slideTo(slide);
      }
    },

    handleSlideSwiped(slide: number) {
      const swiperNavigatorRef = this.$refs['swiper-navigator'] as
        | SwiperRef
        | undefined;

      if (swiperNavigatorRef) {
        this.page = slide;
        swiperNavigatorRef.slideTo(slide);
      }
    },

    // mudar tudo pra uma Store de Paginas

    handleClickNavigation(amount: number) {
      const swiperNavigatorRef = this.$refs['swiper-navigator'] as
        | SwiperRef
        | undefined;

      const swiperPagesRef = this.$refs['swiper-pages'] as
        | SwiperRef
        | undefined;

      if (swiperNavigatorRef && swiperPagesRef) {
        // 0 to (max - 1)
        const max = booksStore.$single.pages.length - 1;
        this.page += amount;
        this.page = Math.max(Math.min(max, this.page), 0);
        swiperNavigatorRef.slideTo(this.page);
        swiperPagesRef.slideTo(this.page);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.book-reading-pages {
  .book-reading-pages-content {
    display: grid;
    grid-template-rows: 800px;
    grid-template-columns: 180px 1fr;
    gap: 2rem;
    margin-top: 1.5rem;
  }

  .swiper-navigation {
    margin-top: 1rem;
    justify-content: flex-end;
  }
}
</style>
