<template>
  <div class="book-info">
    <strong>{{ title }}</strong>
    <p>{{ authorName }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
    authorName: {
      type: String,
      required: true,
    },
  },
});
</script>
