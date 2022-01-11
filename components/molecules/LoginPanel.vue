<template>
  <div class="login-panel">
    <Logo class="login-logo" />
    <h4>Login</h4>
    <form @submit.prevent="login">
      <LoginInput v-model="email" type="text" placeholder="Email" />
      <LoginInput v-model="password" type="password" placeholder="Password" />
      <button class="login-btn" type="submit">Log in</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { authStore } from '@/store';

export default Vue.extend({
  name: 'LoginPanel',

  data() {
    return {
      email: 'abc',
      password: '',
    };
  },

  methods: {
    login() {
      authStore.login(this.email, this.password);
      this.$router.push('/dashboard');
    },
  },
});
</script>

<style lang="scss" scoped>
.login-panel {
  background-color: color(dark, darkest);
  padding: 5rem 2rem;
  display: grid;
  gap: 2rem;
  .login-logo {
    width: 100px;
  }
  h4 {
    color: color(light, base);
  }
  form {
    display: grid;
    gap: 1rem;
  }
  .login-btn {
    background-color: color(light, base);
    width: 100%;
    height: 2.3rem;
    border-radius: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
      background-color: color(light, darkest);
    }
  }
}
</style>
