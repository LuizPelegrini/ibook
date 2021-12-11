<template>
  <div class="book-page-cover">
    <img :src="coverImg" :alt="description" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    coverImg: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.book-page-cover {
  height: 100%;
  img {
    height: 100%;
  }
}
</style>
