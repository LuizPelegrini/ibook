<template>
  <div class="dashboard-page">
    <DashboardTemplate />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  middleware: 'auth',
});
</script>
