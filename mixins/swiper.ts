import Vue from 'vue';
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import { booksStore } from '@/store';

export default Vue.extend({
  components: {
    Swiper,
    SwiperSlide,
  },

  directives: {
    swiper: directive,
  },

  computed: {
    $book() {
      return booksStore.$single;
    },
  },
});
