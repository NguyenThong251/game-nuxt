<template>
  <WithdrawHistoryPage />
</template>
<script setup lang="ts">
  import { PageName } from '~/const';

  definePageMeta({
    name: PageName.WithdrawHistory,
    layout: 'user',
    middleware: ['auth']
  })
</script>