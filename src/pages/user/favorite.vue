<template>
    <FavoritePage />
  </template>
  <script setup lang="ts">
    import { PageName } from '~/const';
    import FavoritePage from '~/features/user/favorite/ui/favorite-page.vue';
  
    definePageMeta({
      name: PageName.Favorite,
      layout: 'user',
      middleware: ['auth']
    })
  </script>