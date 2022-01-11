<template>
  <div class="login-page">
    <LoginTemplate />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  middleware: 'guest',
});
</script>
