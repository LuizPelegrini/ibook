<template>
  <div class="book-pages-swiper-navigator">
    <Swiper
      ref="swiper"
      class="swiper"
      :options="swiperOptions"
      @click-slide="handleClick"
    >
      <SwiperSlide v-for="(page, index) in $book.pages" :key="page.id">
        <BookPageNavigationItem
          :page-number="page.pageNumber"
          :is-current-page="innerPage === index"
        />
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

  props: {
    page: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      swiperOptions: {
        direction: 'vertical',
        slidesPerView: 3,
        spaceBetween: 20,
      },
      innerPage: this.page as Number,
    };
  },

  methods: {
    handleClick(slide: Number) {
      this.$emit('slideChanged', slide);
    },

    slideTo(slide: Number) {
      const swiperRef = this.$refs.swiper as SwiperRef | undefined;
      if (swiperRef) {
        swiperRef.$swiper.slideTo(slide);
        this.innerPage = slide;
      }
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
