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

  data() {
    return {
      swiperOptions: {
        grabCursor: true,
      },
    };
  },

  computed: {
    $book() {
      return booksStore.$single;
    },
  },
});
</script>
