<template>
  <div class="book-page-navigation"></div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    pageNumber: {
      type: Number,
      required: true,
    },
  },
});
</script>
