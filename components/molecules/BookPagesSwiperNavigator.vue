<template>
  <div class="book-pages-swiper-navigator">
    <Swiper
      ref="swiper"
      class="swiper"
      :options="swiperOptions"
      @click-slide="handleClick"
    >
      <SwiperSlide v-for="page in $book.pages" :key="page.id">
        <BookPageNavigationItem :page-number="page.pageNumber" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import SwiperMixin from '@/mixins/swiper';
import SwiperType from '@/utils/types/Swiper';

interface SwiperRef {
  $swiper: SwiperType;
}

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

  methods: {
    handleClick(slide: Number) {
      this.$emit('slideChanged', slide);
    },

    slideTo(slide: Number) {
      const swiperRef = this.$refs.swiper as SwiperRef | undefined;
      if (swiperRef) swiperRef.$swiper.slideTo(slide);
    },
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
