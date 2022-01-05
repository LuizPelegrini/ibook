<template>
  <div>
    <h1>Login</h1>
    <button type="button" @click="login">Login</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { authStore } from '@/store';

export default Vue.extend({
  middleware: 'guest',

  methods: {
    login() {
      authStore.login('luiz@hotmail.com', 'abc123');
      this.$router.push('/dashboard');
    },
  },
});
</script>
