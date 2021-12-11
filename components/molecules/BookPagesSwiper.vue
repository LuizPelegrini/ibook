<template>
  <div class="book-pages-swiper">
    <Swiper v-if="$book" :options="swiperOptions">
      <SwiperSlide>
        <BookPageCover
          :cover-img="$book.cover"
          :description="`${$book.title}'s cover`"
        />
      </SwiperSlide>
      <SwiperSlide v-for="page in $book.pages" :key="page.id" :class="page.id">
        <BookPageText :text="page.text" :class="page.id" />
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
        grabCursor: true,
        spaceBetween: 50,
      },
    };
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
    }
  }
}
</style>
