<template>
  <div class="book-pages-swiper">
    <Swiper
      v-if="$book"
      ref="swiper"
      class="swiper"
      :options="swiperOptions"
      @slide-change="handleSlideChange"
    >
      <SwiperSlide v-for="page in $book.pages" :key="page.id">
        <BookPageText :text="page.text" />
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
        grabCursor: true,
        spaceBetween: 50,
        slidesPerView: 'auto',
      },
    };
  },

  methods: {
    slideTo(slide: Number) {
      const swiperRef = this.$refs.swiper as SwiperRef | undefined;
      if (swiperRef) {
        swiperRef.$swiper.slideTo(slide);
      }
    },

    handleSlideChange() {
      const swiperRef = this.$refs.swiper as SwiperRef | undefined;
      if (swiperRef) {
        const swiperIndex = swiperRef.$swiper.activeIndex;
        this.$emit('slide-change', swiperIndex);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.book-pages-swiper {
  height: 100%;
  padding: 50px;
  box-shadow: 0px 4px 11px 4px rgba(0, 0, 0, 0.13);
  .swiper-container {
    height: 100%;
    .swiper-slide {
      overflow-y: auto;
      p {
        white-space: normal;
      }
    }
  }
}
</style>
