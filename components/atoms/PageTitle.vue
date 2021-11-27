<template>
  <h1 class="page-title">
    {{ text }} <b>{{ strong }}</b>
  </h1>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true,
    },
    strong: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.page-title {
  text-align: center;
  font-weight: 500;
  grid-template-columns: 1fr;
  font-size: 1.8rem;

  @include screen('medium') {
    font-size: 2.5rem;
  }
  b {
    color: color(dark, darkest);
  }
}
</style>
