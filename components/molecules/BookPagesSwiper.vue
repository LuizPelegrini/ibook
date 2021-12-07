<template>
  <div class="book-pages-swiper">
    <Swiper :options="swiperOptions">
      <SwiperSlide>
        <BookPageText text="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <BookPageText text="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <BookPageText text="Slide 3" />
      </SwiperSlide>
      <div slot="pagination" class="swiper-pagination"></div>
    </Swiper>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';

export default Vue.extend({
  components: {
    Swiper,
    SwiperSlide,
  },

  directives: {
    swiper: directive,
  },

  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
        },
      },
    };
  },
});
</script>
