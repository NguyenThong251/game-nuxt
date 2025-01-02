<template>
  <DepositHistoryPage />
</template>
<script setup lang="ts">
  import { PageName } from '~/const';

  definePageMeta({
    name: PageName.DepositHistory,
    layout: 'user',
    middleware: ['auth']
  })
</script>