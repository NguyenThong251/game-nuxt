<template>
  <GiftPage />
</template>
<script setup lang="ts">
  import { PageName } from '~/const';
  import GiftPage from '~/features/user/gift/ui/gift-page.vue';

  definePageMeta({
    name: PageName.Gift,
    layout: 'user',
    middleware: ['auth']
  })
</script>