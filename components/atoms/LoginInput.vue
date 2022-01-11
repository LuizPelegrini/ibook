<template>
  <div class="login-input">
    <input v-bind="$attrs" :value="innerValue" @input="handleInput" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  inheritAttrs: true,

  props: {
    value: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      innerValue: this.value,
    };
  },

  watch: {
    value(newVal) {
      this.innerValue = newVal;
    },

    innerValue(newVal) {
      this.$emit('input', newVal);
    },
  },

  methods: {
    handleInput(event: Event) {
      const inputEl = event.target as HTMLInputElement;
      this.innerValue = inputEl.value;
    },
  },
});
</script>

<style lang="scss" scoped>
.login-input {
  border: 1px solid color(dark, base);
  border-radius: 1rem;
  input {
    width: 100%;
    padding: 0.6rem 0.8rem;
    background-color: transparent;
    caret-color: color(dark, base);
    color: color(dark, base);
  }
}
</style>
