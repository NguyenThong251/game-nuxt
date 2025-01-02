<template>
  <main class="main">
    <UserLayoutDesktop />
    <UserLayoutMobile />
  </main>
</template>

<style scoped>
.main {
  padding-top: 140px;
  position: relative;
}

@media screen and (max-width: 1023px) {
  .main {
    padding-top: 0;
  }
}
</style>