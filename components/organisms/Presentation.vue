<template>
  <div class="presentation">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur,
      distinctio quod pariatur quo fugit rerum modi maiores porro doloremque
      commodi at quaerat eum, id impedit repudiandae. Veritatis asperiores
      nostrum commodi eos quas fugiat deleniti dolores. Reprehenderit iste at
      qui, sint vitae magnam, aliquid quae assumenda soluta adipisci enim
      eligendi.
    </p>
    <img src="@/assets/img/presentation.svg" alt="iBook Presentation" />
  </div>
</template>

<style lang="scss" scoped>
.presentation {
  display: grid;
  grid-gap: 2rem;
  align-items: center;
  grid-template-columns: 1fr;
  @include screen('medium') {
    grid-template-columns: repeat(2, 1fr);
  }
  p {
    line-height: 26px;
  }
  img {
    max-width: 100%;
  }
}
</style>
