<template>
  <p>{{ text }}</p>
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
p {
  color: color(light, darkest);
}
</style>
