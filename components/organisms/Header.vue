<template>
  <header class="header">
    <nav>
      <ul class="items">
        <li class="item">
          <Logo />
        </li>
        <li class="item">
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li class="item">
          <NuxtLink to="/about">About</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: grid;
  justify-content: center;
  nav {
    background-color: color(dark, darkest);
    width: 308px;
    height: 50px;
    padding: 0 10px;
    border-radius: 35px;
    .items {
      display: grid;
      grid-template-columns: repeat(3, auto);
      align-items: center;
      justify-content: space-around;
      height: 100%;
    }
    .item a {
      color: color(light, darkest);
      font-weight: 500;
      position: relative;
      &.nuxt-link-exact-active:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -16px;
        width: 100%;
        height: 4px;
        background-color: color(light, base);
      }
    }
  }
}
</style>
