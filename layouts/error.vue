<template>
  <div class="error-layout">
    <div>
      <NotFoundIcon />
      <NotFoundText
        text="The page you're looking for does not exist"
        class="error-layout-notfound-text"
      />
      <NuxtLink to="/">Back to Home</NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.error-layout {
  background-color: color(dark, darkest);
  height: 100vh;
  display: grid;
  align-items: center;
  justify-content: center;

  div {
    display: grid;
    gap: 5rem;
    a {
      padding: 0.5rem 1rem;
      background-color: color(light, darkest);
      color: color(dark, darkest);
      border-radius: 4px;
      justify-self: center;
    }
    .error-layout-notfound-text {
      text-align: center;
    }
  }
}
</style>
