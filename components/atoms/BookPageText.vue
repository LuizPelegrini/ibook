<template>
  <div class="book-page-text">
    <p v-text="text"></p>
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
