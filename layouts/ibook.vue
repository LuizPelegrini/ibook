<template>
  <div class="ibook-layout">
    <Header />
    <Container>
      <Nuxt />
    </Container>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.ibook-layout {
  margin-top: 4.313rem;
  display: grid;
  gap: 6.75rem;
  grid-template-rows: auto 1fr auto;
}
</style>
