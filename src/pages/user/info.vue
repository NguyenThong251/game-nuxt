<template>
  <UserInfoPage />
</template>
<script setup lang="ts">
  import { PageName } from '~/const';

  definePageMeta({
    name: PageName.UserInfo,
    layout: 'user',
    middleware: ['auth']
  })
</script>