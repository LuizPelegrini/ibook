<template>
  <img class="book-image" :src="image" :alt="altText" />
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    image: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.book-image {
  box-shadow: 0 0 15px color(shadow);
}
</style>
