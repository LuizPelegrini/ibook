<template>
  <div class="dashboard-header">
    <DashboardLogo class="dashboard-logo" />
    <PageTitle text="You're at the" strong="Dashboard" />
    <button type="button" @click="logout">Logout</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { authStore } from '@/store';

export default Vue.extend({
  methods: {
    logout() {
      authStore.logout();
      this.$router.push('/login');
    },
  },
});
</script>

<style lang="scss" scoped>
.dashboard-header {
  display: grid;
  justify-content: center;
  justify-items: center;
  gap: 2rem;
  .dashboard-logo {
    width: 100px;
  }
  button {
    background-color: color(dark, darkest);
    color: color(light, darkest);
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
}
</style>
