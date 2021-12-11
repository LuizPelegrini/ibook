<template>
  <div class="book-page-text">
    <div v-html="text"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.book-page-text {
  div {
    line-height: 1.625rem;
  }
}
</style>
