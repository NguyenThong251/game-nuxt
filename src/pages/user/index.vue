<template>
  <UserHomePage />
</template>
<script setup lang="ts">
  import { PageName } from '~/const';
  import UserHomePage from '~/features/user/home/ui/user-home-page.vue';

  definePageMeta({
    name: PageName.UserHome,
    layout: 'user',
    middleware: ['auth']
  })
</script>