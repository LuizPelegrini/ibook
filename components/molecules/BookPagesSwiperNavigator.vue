<template>
  <div class="book-pages-swiper-navigator">
    <Swiper>
      <SwiperSlide v-for="page in $book.pages" :key="page.id" :class="page.id">
        <BookPageNavigationItem :page-number="2" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import SwiperMixin from '@/mixins/swiper';

export default Vue.extend({
  mixins: [SwiperMixin],
});
</script>
