<template>
  <div class="book-page-navigation-arrows">
    <BookPageArrowNavigator class="prev-arrow" @click="$emit('clickPrev')" />
    <BookPageArrowNavigator class="next-arrow" @click="$emit('clickNext')" />
  </div>
</template>

<style lang="scss" scoped>
.book-page-navigation-arrows {
  display: flex;
  .next-arrow {
    margin-left: 0.5rem;
    transform: rotate(180deg);
  }
}
</style>
