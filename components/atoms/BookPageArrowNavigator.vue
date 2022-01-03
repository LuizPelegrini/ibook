<template>
  <div class="book-page-arrow-navigator">
    <button type="button" @click="$emit('click')">
      <img src="@/assets/img/arrow.svg" alt="Navigation arrow" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.book-page-arrow-navigator {
  button {
    background-color: color(dark, darkest);
    padding: 0.6rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
}
</style>
